import { Component, OnDestroy, OnInit } from '@angular/core';
import { DshBaseComponent } from '../../../components/layout/dashboard/dsh-base/dsh-base.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { UserModel } from '../../../model/user/user.model';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'app-manajemen-user',
    standalone: true,
    imports: [
        TagModule,
        TableModule,
        FormsModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        DshBaseComponent,
        ReactiveFormsModule,
    ],
    templateUrl: './manajemen-user.component.html',
    styleUrl: './manajemen-user.component.scss'
})
export class ManajemenUserComponent implements OnInit, OnDestroy {

    Destroy$ = new Subject();

    ShowDialogForm = false;

    FormState: 'create' | 'update' = 'create';

    FormUser: FormGroup;

    User: UserModel.IUser[] = [];

    constructor(
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _userService: UserService,
        private _messageService: MessageService,
    ) {
        this.FormUser = this._formBuilder.group({
            nama: ['', [Validators.required]],
            no_telepon: ['', [Validators.required]],
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {
        this.getAll();
    }

    ngOnDestroy(): void {
        this.Destroy$.next(0);
        this.Destroy$.complete();
    }

    private getAll() {
        this._userService
            .getAll()
            .pipe(takeUntil(this.Destroy$))
            .subscribe((result) => {
                if (result) {
                    this.User = result as any;
                }
            })
    }

    handleCreate(data: UserModel.Create) {
        this._userService
            .create(data)
            .pipe(takeUntil(this.Destroy$))
            .subscribe((result) => {
                if (result) {
                    this._messageService.clear();
                    this._messageService.add({ severity: 'success', summary: 'Berhasil!', detail: 'User Berhasil Disimpan' });
                    this.FormUser.reset();
                }
            })
    }

    handleEditUser(data: any) {
        this.ShowDialogForm = true;
        this.FormState = 'update';
        this.FormUser.patchValue(data);
    }

    handleUpdate(data: UserModel.Update) {
        this._userService
            .update(data)
            .pipe(takeUntil(this.Destroy$))
            .subscribe((result) => {
                if (result) {
                    this._messageService.clear();
                    this._messageService.add({ severity: 'success', summary: 'Berhasil!', detail: 'User Berhasil Diperbarui' });
                    this.FormUser.reset();
                }
            })
    }
}
