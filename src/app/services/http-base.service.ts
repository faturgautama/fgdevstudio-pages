import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class HttpBaseService {

    ShowLoading$ = new BehaviorSubject<boolean>(false);

    constructor(
        private _httpClient: HttpClient,
        private _messageService: MessageService,
    ) { }

    private baseUrl = environment.webApiUrl;

    private withJson(url: string): string {
        return `${this.baseUrl}/${url}.json`;
    }

    private handleRequest<T>(obs$: Observable<T>): Observable<T> {
        this.ShowLoading$.next(true);
        return obs$.pipe(
            tap(() => this.ShowLoading$.next(false)),
            catchError((error: HttpErrorResponse) => {
                this.ShowLoading$.next(false);
                this._messageService.clear();
                this._messageService.add({
                    severity: 'error',
                    summary: 'Oops',
                    detail: error.message,
                });
                return throwError(() => error);
            })
        );
    }

    get<T>(path: string): Observable<T> {
        return this.handleRequest(this._httpClient.get<T>(this.withJson(path)));
    }

    getAll<T>(path: string): Observable<(T & { id: string })[]> {
        return this._httpClient.get<{ [key: string]: T }>(this.withJson(path)).pipe(
            map((data) => {
                if (!data) return [];
                return Object.entries(data).map(([id, value]) => ({
                    id,
                    ...value,
                }));
            }),
        );
    }

    post<T>(path: string, data: any): Observable<T> {
        return this.handleRequest(this._httpClient.post<T>(this.withJson(path), data));
    }

    put<T>(path: string, data: any): Observable<T> {
        return this.handleRequest(this._httpClient.put<T>(this.withJson(path), data));
    }

    patch<T>(path: string, data: any): Observable<T> {
        return this.handleRequest(this._httpClient.patch<T>(this.withJson(path), data));
    }

    delete<T>(path: string): Observable<T> {
        return this.handleRequest(this._httpClient.delete<T>(this.withJson(path)));
    }
}
