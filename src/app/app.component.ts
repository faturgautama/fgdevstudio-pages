import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoadingDialogComponent } from './components/loading/loading-dialog/loading-dialog.component';
import { ToastModule } from 'primeng/toast'
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        ToastModule,
        RouterOutlet,
        CommonModule,
        HttpClientModule,
        LoadingDialogComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'fatur-ecommerce';
}
