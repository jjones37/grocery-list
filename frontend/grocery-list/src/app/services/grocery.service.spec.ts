import { HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GroceryListService } from 'src/app/services/grocery.service';
import { Grocery } from '../objects/Grocery';

describe('GroceryFormComponent', () => {
  let service: GroceryListService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GroceryListService],
    }).compileComponents();

    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceryListService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should create grocery', () => {
    const grocery: string = 'Apple';
    let observable = service.create(grocery);
    observable.subscribe((item) => expect(item).toBeTruthy);
  });

  it('should remove grocery', () => {
    let observable = service.delete(1);
    observable.subscribe((item) => expect(item).toBeFalsy);
  });

  it('handleError', () => {
    spyOn(console, 'error');
    service.handleError(new HttpErrorResponse({ status: 422 }));
    expect(console.error).toHaveBeenCalled();
    expect(service).toBeTruthy();
  });
});
