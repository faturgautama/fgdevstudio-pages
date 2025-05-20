export namespace CustomerModel {
    export interface ICustomer {
        id: string;
        nama: string;
        email: string;
        no_telepon: string;
        password: string;
        status?: boolean;
        registered_at?: Date;
    }

    export class GetAll {
        status: boolean;
        message: string;
        data: ICustomer[];

        constructor(
            _status: boolean,
            _message: string,
            _data: ICustomer[]
        ) {
            this.status = _status;
            this.message = _message;
            this.data = _data;
        }
    }

    export class GetById {
        status: boolean;
        message: string;
        data: ICustomer;

        constructor(
            _status: boolean,
            _message: string,
            _data: ICustomer
        ) {
            this.status = _status;
            this.message = _message;
            this.data = _data;
        }
    }

    export interface Register {
        nama: string;
        email: string;
        no_telepon: string;
        password: string;
    }

    export interface Login {
        email: string;
        password: string;
    }
}