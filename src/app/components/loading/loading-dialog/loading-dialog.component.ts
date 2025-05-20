import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Subject, takeUntil } from 'rxjs';
import { HttpBaseService } from '../../../services/http-base.service';

@Component({
    selector: 'app-loading-dialog',
    standalone: true,
    imports: [
        CommonModule,
        DialogModule,
        ProgressSpinnerModule
    ],
    templateUrl: './loading-dialog.component.html',
    styleUrls: ['./loading-dialog.component.scss']
})
export class LoadingDialogComponent implements OnDestroy {

    Destroy$ = new Subject();

    Visible = false;

    constructor(
        private _httpBaseService: HttpBaseService
    ) {
        this._httpBaseService
            .ShowLoading$
            .pipe(takeUntil(this.Destroy$))
            .subscribe((result) => {
                this.Visible = result;
            })
    }

    ngOnDestroy(): void {
        this.Destroy$.next(0);
        this.Destroy$.complete();
    }
}
