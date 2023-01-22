import { _isTestEnvironment } from '@angular/cdk/platform';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  Observable,
  switchMap,
  throwError,
} from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Grocery } from '../objects/Grocery';

@Injectable({
  providedIn: 'root',
})
export class GroceryListService {
  private readonly apiUrl = `${environment.apiUrl}/Grocery`;
  private stream = new BehaviorSubject<void>(undefined);

  constructor(protected httpClient: HttpClient) {}

  getAll(): Observable<Grocery[]> {
    return this.stream.asObservable().pipe(
      switchMap(() =>
        this.httpClient.get<Grocery[]>(`${this.apiUrl}/GroceryList`)
      ),
      catchError(this.handleError)
    );
  }

  create(grocery: String): Observable<Grocery> {
    return this.httpClient
      .post<Grocery>(`${this.apiUrl}`, { name: grocery })
      .pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  refresh(): void {
    this.stream.next();
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
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
