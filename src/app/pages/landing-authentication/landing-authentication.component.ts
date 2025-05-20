import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Subject, takeUntil } from 'rxjs';
import { CustomerModel } from '../../model/customer/customer.mode,';
import { CustomerService } from '../../services/customer.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-landing-authentication',
    standalone: true,
    imports: [
        NgIf,
        FormsModule,
        ButtonModule,
        PasswordModule,
        InputTextModule,
        ReactiveFormsModule,
    ],
    templateUrl: './landing-authentication.component.html',
    styleUrl: './landing-authentication.component.scss'
})
export class LandingAuthenticationComponent implements OnInit, OnDestroy {

    Destroy$ = new Subject();

    FormState: 'login' | 'register' = 'login';

    FormAuthentication: FormGroup;

    constructor(
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _messageService: MessageService,
        private _customerService: CustomerService
    ) {
        this.FormAuthentication = this._formBuilder.group({
            nama: ['', [Validators.required]],
            email: ['', [Validators.required]],
            no_telepon: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.Destroy$.next(0);
        this.Destroy$.complete();
    }

    handleRegister(data: CustomerModel.Register) {
        this._customerService
            .register(data)
            .pipe(takeUntil(this.Destroy$))
            .subscribe((result) => {
                if (result) {
                    this._messageService.clear();
                    this._messageService.add({ severity: 'success', summary: 'Berhasil!', detail: 'Register akun berhasil, silahkan login' });
                    this.FormAuthentication.reset();
                    this.FormState = 'login';
                }
            })
    }

    handleLogin(data: CustomerModel.Register) {
        const payload = {
            email: data.email,
            password: data.password
        }

        this._customerService
            .login(payload)
            .pipe(takeUntil(this.Destroy$))
            .subscribe((result) => {
                if (result) {
                    this._messageService.clear();
                    this._messageService.add({ severity: 'success', summary: 'Berhasil!', detail: 'Login Akun Berhasil' });
                    this.FormAuthentication.reset();
                    this.FormState = 'login';
                    this._router.navigateByUrl("/");
                }
            })
    }
}
