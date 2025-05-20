import { Component } from '@angular/core';
import { DshNavbarComponent } from '../dsh-navbar/dsh-navbar.component';
import { DshSidebarComponent } from '../dsh-sidebar/dsh-sidebar.component';

@Component({
    selector: 'app-dsh-base',
    standalone: true,
    imports: [
        DshNavbarComponent,
        DshSidebarComponent,
    ],
    templateUrl: './dsh-base.component.html',
    styleUrl: './dsh-base.component.scss'
})
export class DshBaseComponent {

}
