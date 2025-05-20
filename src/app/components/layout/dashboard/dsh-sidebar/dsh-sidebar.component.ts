import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dsh-sidebar',
    standalone: true,
    imports: [
        NgFor
    ],
    templateUrl: './dsh-sidebar.component.html',
    styleUrl: './dsh-sidebar.component.scss'
})
export class DshSidebarComponent {

    SidebarMenu = [
        { title: 'Dashboard', icon: 'pi pi-home', path: 'dashboard/beranda' },
        { title: 'Manajemen User', icon: 'pi pi-users', path: 'dashboard/user' },
        { title: 'Manejemen Produk', icon: 'pi pi-book', path: 'dashboard/produk' },
    ];

    constructor(
        private _router: Router,
    ) { }

    handleNavigateMenu(url: string) {
        this._router.navigateByUrl(url);
    }
}
