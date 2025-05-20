import { Component, OnDestroy, OnInit } from '@angular/core';
import { LndBaseComponent } from "../../components/layout/landing/lnd-base/lnd-base.component";
import { BehaviorSubject, Subject } from 'rxjs';
import { CardProductComponent } from '../../components/card/card-product/card-product.component';
import { ProductModel } from '../../model/product/product.model';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [
        ButtonModule,
        CarouselModule,
        LndBaseComponent,
        CardProductComponent,
    ],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit, OnDestroy {

    Destroy$ = new Subject();

    HomeBanners = [
        { title: 'Banner 1', image: '../../../assets/image/sample_banner.png' },
        { title: 'Banner 2', image: '../../../assets/image/sample_banner.png' },
        { title: 'Banner 3', image: '../../../assets/image/sample_banner.png' },
    ];

    ActiveBannersIndex = 0;

    Product$ = new BehaviorSubject<ProductModel.IProduct[]>([
        { id: '1', nama: 'Euodia 1', harga: 5000000, gambar_produk: '', created_at: new Date(), created_by: 'Admin', status: true },
        { id: '2', nama: 'Euodia 2', harga: 5000000, gambar_produk: '', created_at: new Date(), created_by: 'Admin', status: true },
        { id: '3', nama: 'Euodia 3', harga: 5000000, gambar_produk: '', created_at: new Date(), created_by: 'Admin', status: true },
        { id: '4', nama: 'Euodia 4', harga: 5000000, gambar_produk: '', created_at: new Date(), created_by: 'Admin', status: true },
    ]);

    constructor() { }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.Destroy$.next(0);
        this.Destroy$.complete();
    }

    handlePrevBanner(currentIndex: number) {
        if (currentIndex != 0) {
            this.ActiveBannersIndex -= 1;
        };
    }

    handleNextBanner(currentIndex: number) {
        if (currentIndex != (this.HomeBanners.length - 1)) {
            this.ActiveBannersIndex += 1;
        };
    }
}
