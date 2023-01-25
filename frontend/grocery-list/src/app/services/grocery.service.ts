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

  //Gets a list of Groceries
  getAll(): Observable<Grocery[]> {
    return this.stream.asObservable().pipe(
      switchMap(() =>
        this.httpClient.get<Grocery[]>(`${this.apiUrl}/GroceryList`)
      ),
      catchError(this.handleError)
    );
  }

  //Creates a new Grocery
  create(grocery: String): Observable<Grocery> {
    return this.httpClient
      .post<Grocery>(`${this.apiUrl}`, { name: grocery })
      .pipe(catchError(this.handleError));
  }

  //Deletes an existing grocery
  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  //Refreshes data stream for the getAll request
  refresh(): void {
    this.stream.next();
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    console.error(
      `Backend returned code ${error.status}, ` + `body was: ${error.error}`
    );
    return throwError(error);
  }
}
