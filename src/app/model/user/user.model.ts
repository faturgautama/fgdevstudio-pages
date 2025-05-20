export namespace UserModel {
    export interface IUser {
        id: string;
        nama: string;
        email: string;
        no_telepon: string;
        password?: string;
        status?: boolean;
        created_at?: Date;
    }

    export class GetAll {
        status: boolean;
        message: string;
        data: IUser[];

        constructor(
            _status: boolean,
            _message: string,
            _data: IUser[]
        ) {
            this.status = _status;
            this.message = _message;
            this.data = _data;
        }
    }

    export class GetById {
        status: boolean;
        message: string;
        data: IUser;

        constructor(
            _status: boolean,
            _message: string,
            _data: IUser
        ) {
            this.status = _status;
            this.message = _message;
            this.data = _data;
        }
    }

    export interface Create {
        nama: string;
        email: string;
        no_telepon: string;
        password: string;
    }

    export interface Update {
        nama: string;
        email: string;
        no_telepon: string;
        password: string;
        status: string;
    }
}