import { Component } from '@angular/core';
import { LndNavbarComponent } from "../lnd-navbar/lnd-navbar.component";
import { LndFooterComponent } from "../lnd-footer/lnd-footer.component";

@Component({
    selector: 'app-lnd-base',
    standalone: true,
    imports: [LndNavbarComponent, LndFooterComponent],
    templateUrl: './lnd-base.component.html',
    styleUrl: './lnd-base.component.scss'
})
export class LndBaseComponent {

}
