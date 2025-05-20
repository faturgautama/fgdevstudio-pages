import { Component } from '@angular/core';

@Component({
    selector: 'app-lnd-footer',
    standalone: true,
    imports: [],
    templateUrl: './lnd-footer.component.html',
    styleUrl: './lnd-footer.component.scss'
})
export class LndFooterComponent {

    FooterSlugs = [
        {
            content: 'Layanan',
            child: [
                { title: 'BANTUAN', path: '' },
                { title: 'TANYA JAWAB', path: '' },
                { title: 'HUBUNGI KAMI', path: '' },
                { title: 'CARA BERJUALAN', path: '' },
            ]
        },
        {
            content: 'Tentang Kami',
            child: [
                { title: 'ABOUT US', path: '' },
                { title: 'KARIR', path: '' },
                { title: 'BLOG', path: '' },
                { title: 'KEBIJAKAN PRIVASI', path: '' },
                { title: 'SYARAT & KETENTUAN', path: '' },
            ]
        },
        {
            content: 'Mitra',
            child: [
                { title: 'SUPPLIER', path: '' },
            ]
        },
    ]
}
