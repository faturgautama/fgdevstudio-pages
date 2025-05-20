import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { CustomerService } from '../../../../services/customer.service';
import { CustomerModel } from '../../../../model/customer/customer.mode,';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-lnd-navbar',
    standalone: true,
    imports: [
        ButtonModule,
        IconFieldModule,
        InputIconModule,
        InputTextModule,
    ],
    templateUrl: './lnd-navbar.component.html',
    styleUrl: './lnd-navbar.component.scss'
})
export class LndNavbarComponent implements OnInit {

    Customer!: CustomerModel.ICustomer

    constructor(
        private _router: Router,
        private _messageService: MessageService,
        private _customerService: CustomerService,
    ) { }

    ngOnInit(): void {
        const customerData = this._customerService.getCustomerData();
        if (customerData) {
            this.Customer = customerData;
        }
    }

    handleNavigateUrl(url: string) {
        this._router.navigateByUrl(url);
    }

    handleSignOut() {
        this._messageService.clear();
        this._messageService.add({ severity: 'success', summary: 'Berhasil', detail: 'Sign Out Berhasil' });
        setTimeout(() => {
            localStorage.removeItem("_FCUD_");
            this.Customer = null as any;
        }, 1000);
    }
}
