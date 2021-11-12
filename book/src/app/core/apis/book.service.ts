import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient,
  ) { }


  bookSearch(): Observable<void> {
    const url = `https://openapi.naver.com/v1/search/book.json`;

    const httpOption: Object = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'X-Naver-Client-Id': environment.naver_book_client_id,
        'X-Naver-Client-Secret': environment.naver_book_client_id
      })
    };

    return this.http.get<any>(url, httpOption).pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

}
