import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AvatarModule } from 'primeng/avatar';
import { CustomerModel } from '../../../../model/customer/customer.mode,';
import { UserService } from '../../../../services/user.service';

@Component({
    selector: 'app-dsh-navbar',
    standalone: true,
    imports: [
        ButtonModule,
        AvatarModule,
        OverlayPanelModule
    ],
    templateUrl: './dsh-navbar.component.html',
    styleUrl: './dsh-navbar.component.scss'
})
export class DshNavbarComponent implements OnInit {

    User!: CustomerModel.ICustomer

    constructor(
        private _router: Router,
        private _userService: UserService,
        private _messageService: MessageService,
    ) { }

    ngOnInit(): void {
        const customerData = this._userService.getUserData();
        if (customerData) {
            this.User = customerData;
        }
    }

    handleNavigateUrl(url: string) {
        this._router.navigateByUrl(url);
    }

    handleSignOut() {
        this._messageService.clear();
        this._messageService.add({ severity: 'success', summary: 'Berhasil', detail: 'Sign Out Berhasil' });
        setTimeout(() => {
            localStorage.removeItem("_FAUD_");
            this.User = null as any;
            this._router.navigateByUrl("dashboard")
        }, 1000);
    }

}
