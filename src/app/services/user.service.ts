import { Injectable } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { map } from 'rxjs';
import { CustomerModel } from '../model/customer/customer.mode,';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private _httpBaseService: HttpBaseService,
    ) { }

    login(payload: CustomerModel.Login) {
        return this._httpBaseService
            .getAll('user')
            .pipe(
                map((result: any) => {
                    const find = result.find((item: any) => (item.email == payload.email && item.password == payload.password));

                    if (find) {
                        localStorage.setItem("_FAUD_", JSON.stringify(find));
                        return find;
                    } else {
                        return null;
                    }
                })
            )
    }

    create(payload: CustomerModel.Register) {
        return this._httpBaseService.post('user', {
            ...payload,
            created_at: new Date(),
            status: true
        });
    }

    update(payload: CustomerModel.Register) {
        return this._httpBaseService.post('user', payload);
    }

    getAll() {
        return this._httpBaseService.getAll('user');
    }

    getUserData() {
        return JSON.parse(localStorage.getItem("_FAUD_") as any);
    }
}
