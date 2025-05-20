import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: async () => (await import('./pages/landing-page/landing-page.component')).LandingPageComponent,
        data: {
            title: 'Landing Page'
        }
    },
    {
        path: 'login',
        loadComponent: async () => (await import('./pages/landing-authentication/landing-authentication.component')).LandingAuthenticationComponent,
        data: {
            title: 'Login'
        }
    },
    {
        path: 'dashboard',
        loadChildren: async () => (await import('./pages/dashboard/dashboard.routes')).dashboardRoutes,
    },
];
