import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

export const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Naver-Client-Id': environment.id,
        'X-Naver-Client-Secret': environment.secret,
        'X-Custom-Header': 'YES'
    }),
};
export const baseUrl = `${environment.apiBookUrl}`;

@Injectable()
export class BooksService {
    constructor(private http: HttpClient) {}
    
    getBooksTitleSearch(title: string): Observable<any[]> {
        const params = new HttpParams().set('query', title);
        const url = environment.apiBookUrl + '?' + params;
        console.log(url);
        try {
            return this.http.get<any>('/books' + '?' + params, httpOptions).pipe();
        } catch(e) {
            console.log('eee: ', e);
            throw new Error("Unexpected object: " + e);
        }
    }
}
