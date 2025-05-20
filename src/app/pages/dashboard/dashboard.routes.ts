import { Routes } from "@angular/router";

export const dashboardRoutes: Routes = [
    {
        path: '',
        loadComponent: async () => (await import('./authentication/authentication.component')).AuthenticationComponent
    },
    {
        path: 'beranda',
        loadComponent: async () => (await import('./beranda/beranda.component')).BerandaComponent,
    },
    {
        path: 'user',
        loadComponent: async () => (await import('./manajemen-user/manajemen-user.component')).ManajemenUserComponent,
    },
    {
        path: 'produk',
        loadComponent: async () => (await import('./manajemen-produk/manajemen-produk.component')).ManajemenProdukComponent,
    },
]