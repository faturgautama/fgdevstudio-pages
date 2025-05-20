import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../../model/product/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-card-product',
    standalone: true,
    imports: [
        CurrencyPipe
    ],
    templateUrl: './card-product.component.html',
    styleUrl: './card-product.component.scss'
})
export class CardProductComponent {

    @Input('props') props!: ProductModel.IProduct;

    @Output('onClick') onClick = new EventEmitter<ProductModel.IProduct>()

    constructor() { }

    handleClick(data: ProductModel.IProduct) {
        this.onClick.emit(data);
    }
}
