import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DshBaseComponent } from '../../../components/layout/dashboard/dsh-base/dsh-base.component';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { ProductService } from '../../../services/product.service';
import { ProductModel } from '../../../model/product/product.model';
import { CurrencyPipe } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
    selector: 'app-manajemen-produk',
    standalone: true,
    imports: [
        TagModule,
        TableModule,
        FormsModule,
        CurrencyPipe,
        ButtonModule,
        DialogModule,
        InputTextModule,
        DshBaseComponent,
        InputNumberModule,
        ReactiveFormsModule,
    ],
    templateUrl: './manajemen-produk.component.html',
    styleUrl: './manajemen-produk.component.scss'
})
export class ManajemenProdukComponent implements OnInit, OnDestroy {

    Destroy$ = new Subject();

    ShowDialogForm = false;

    FormState: 'create' | 'update' = 'create';

    FormProduct: FormGroup;

    Product: ProductModel.IProduct[] = [];

    constructor(
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _productService: ProductService,
        private _messageService: MessageService,
    ) {
        this.FormProduct = this._formBuilder.group({
            nama: ['', [Validators.required]],
            harga: [0, [Validators.required]],
            gambar_produk: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {
        this.getAll();
    }

    ngOnDestroy(): void {
        this.Destroy$.next(0);
        this.Destroy$.complete();
    }

    private getAll() {
        this._productService
            .getAll()
            .pipe(takeUntil(this.Destroy$))
            .subscribe((result: any) => {
                if (result) {
                    this.Product = result as any;
                }
            })
    }

    handleCreate(data: ProductModel.Create) {
        this._productService
            .create(data)
            .pipe(takeUntil(this.Destroy$))
            .subscribe((result: any) => {
                if (result) {
                    this._messageService.clear();
                    this._messageService.add({ severity: 'success', summary: 'Berhasil!', detail: 'Produk Berhasil Disimpan' });
                    this.FormProduct.reset();
                }
            })
    }

    handleEditProduct(data: any) {
        this.ShowDialogForm = true;
        this.FormState = 'update';
        this.FormProduct.patchValue(data);
    }

    handleUpdate(data: ProductModel.Update) {
        this._productService
            .update(data)
            .pipe(takeUntil(this.Destroy$))
            .subscribe((result: any) => {
                if (result) {
                    this._messageService.clear();
                    this._messageService.add({ severity: 'success', summary: 'Berhasil!', detail: 'Produk Berhasil Diperbarui' });
                    this.FormProduct.reset();
                }
            })
    }

}
