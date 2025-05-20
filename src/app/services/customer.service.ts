import { Injectable } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { map } from 'rxjs';
import { CustomerModel } from '../model/customer/customer.mode,';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    constructor(
        private _httpBaseService: HttpBaseService,
    ) { }

    login(payload: CustomerModel.Login) {
        return this._httpBaseService
            .getAll('customer')
            .pipe(
                map((result: any) => {
                    const find = result.find((item: any) => (item.email == payload.email && item.password == payload.password));

                    if (find) {
                        localStorage.setItem("_FCUD_", JSON.stringify(find));
                        return find;
                    } else {
                        return null;
                    }
                })
            )
    }

    register(payload: CustomerModel.Register) {
        return this._httpBaseService.post('customer', {
            ...payload,
            registered_at: new Date(),
            status: true
        });
    }

    getAll() {
        return this._httpBaseService.getAll('customer');
    }

    private handleLogin(data: any) {
        localStorage.setItem("_FCUD_", JSON.stringify(data));
    }

    getCustomerData() {
        return JSON.parse(localStorage.getItem("_FCUD_") as any);
    }
}
