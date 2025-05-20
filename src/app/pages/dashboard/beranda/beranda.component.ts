import { Component, OnDestroy, OnInit } from '@angular/core';
import { DshBaseComponent } from "../../../components/layout/dashboard/dsh-base/dsh-base.component";
import { Subject, takeUntil } from 'rxjs';
import { UserModel } from '../../../model/user/user.model';
import { ProductService } from '../../../services/product.service';
import { UserService } from '../../../services/user.service';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-beranda',
    standalone: true,
    imports: [
        TagModule,
        TableModule,
        CurrencyPipe,
        DshBaseComponent
    ],
    templateUrl: './beranda.component.html',
    styleUrl: './beranda.component.scss'
})
export class BerandaComponent implements OnInit, OnDestroy {

    Destroy$ = new Subject();

    DashboardCount: any = {
        users: 0,
        user_active: 0,
        products: 0,
        product_active: 0
    };

    User: UserModel.IUser[] = [];

    Produk: UserModel.IUser[] = [];

    constructor(
        private _userService: UserService,
        private _productService: ProductService,
    ) { }

    ngOnInit(): void {
        this.getAllUser();
        this.getAllProduct();
    }

    ngOnDestroy(): void {
        this.Destroy$.next(0);
        this.Destroy$.complete();
    }

    private getAllUser() {
        this._userService
            .getAll()
            .pipe(takeUntil(this.Destroy$))
            .subscribe((result: any) => {
                if (result) {
                    this.DashboardCount.users = result.length;
                    this.DashboardCount.user_active = result.filter((item: any) => item['status'] == true).length;
                }
            })
    }

    private getAllProduct() {
        this._productService
            .getAll()
            .pipe(takeUntil(this.Destroy$))
            .subscribe((result: any) => {
                if (result) {
                    this.DashboardCount.products = result.length;
                    this.DashboardCount.product_active = result.filter((item: any) => item['status'] == true).length;
                    this.Produk = result;
                }
            })
    }
}
