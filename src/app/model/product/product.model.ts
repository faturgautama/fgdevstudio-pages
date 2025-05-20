export namespace ProductModel {
    export interface IProduct {
        id: string;
        nama: string;
        harga: number;
        gambar_produk: string;
        status: boolean;
        created_at: Date;
        created_by: string;
        updated_at?: Date;
        updated_by?: string;
    }

    export class GetAll {
        status: boolean;
        message: string;
        data: IProduct[];

        constructor(
            _status: boolean,
            _message: string,
            _data: IProduct[]
        ) {
            this.status = _status;
            this.message = _message;
            this.data = _data;
        }
    }

    export class GetById {
        status: boolean;
        message: string;
        data: IProduct;

        constructor(
            _status: boolean,
            _message: string,
            _data: IProduct
        ) {
            this.status = _status;
            this.message = _message;
            this.data = _data;
        }
    }

    export interface Create {
        nama: string;
        harga: number;
        gambar_produk: string;
        status: boolean;
    }

    export interface Update {
        id: string;
        nama: string;
        harga: number;
        gambar_produk: string;
        status: boolean;
    }
}