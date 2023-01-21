import { _isTestEnvironment } from '@angular/cdk/platform';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Grocery } from '../objects/Grocery';

@Injectable({
  providedIn: 'root',
})
export class GroceryListService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  public get(): Observable<Grocery[]> {
    return this.httpClient
      .get<Grocery[]>(`${this.apiUrl}/`)
      .pipe(catchError(this.handleError));
  }

  // Handle API errors
  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError(error);
  }
}
