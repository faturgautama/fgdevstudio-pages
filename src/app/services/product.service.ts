import { Injectable } from '@angular/core';
import { HttpBaseService } from './http-base.service';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(
        private _httpBaseService: HttpBaseService,
    ) { }

    create(payload: any) {
        return this._httpBaseService.post('produk', {
            ...payload,
            created_at: new Date(),
            status: true
        });
    }

    update(payload: any) {
        return this._httpBaseService.post('produk', payload);
    }

    getAll() {
        return this._httpBaseService.getAll('produk');
    }
}
