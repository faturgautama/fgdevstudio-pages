import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Subject, takeUntil } from 'rxjs';
import { CustomerModel } from '../../../model/customer/customer.mode,';
import { CustomerService } from '../../../services/customer.service';
import { UserService } from '../../../services/user.service';

@Component({
    selector: 'app-authentication',
    standalone: true,
    imports: [
        NgIf,
        FormsModule,
        ButtonModule,
        PasswordModule,
        InputTextModule,
        ReactiveFormsModule,
    ],
    templateUrl: './authentication.component.html',
    styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent implements OnInit, OnDestroy {

    Destroy$ = new Subject();

    FormState: 'login' | 'register' = 'login';

    FormAuthentication: FormGroup;

    constructor(
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _userService: UserService,
        private _messageService: MessageService,
    ) {
        this.FormAuthentication = this._formBuilder.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.Destroy$.next(0);
        this.Destroy$.complete();
    }

    handleLogin(data: CustomerModel.Login) {
        this._userService
            .login(data)
            .pipe(takeUntil(this.Destroy$))
            .subscribe((result) => {
                if (result) {
                    this._messageService.clear();
                    this._messageService.add({ severity: 'success', summary: 'Berhasil!', detail: 'Login Akun Berhasil' });
                    this.FormAuthentication.reset();
                    this.FormState = 'login';
                    this._router.navigateByUrl("/dashboard/beranda");
                }
            })
    }

}
