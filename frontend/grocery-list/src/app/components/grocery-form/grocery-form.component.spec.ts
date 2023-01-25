import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs';
import { GroceryListService } from 'src/app/services/grocery.service';

import { GroceryFormComponent } from './grocery-form.component';

describe('GroceryFormComponent', () => {
  let component: GroceryFormComponent;
  let fixture: ComponentFixture<GroceryFormComponent>;
  let service: GroceryListService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroceryFormComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
      ],
      providers: [GroceryListService],
    }).compileComponents();

    service = TestBed.inject(GroceryListService);
    fixture = TestBed.createComponent(GroceryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new grocery item', async () => {
    const grocery: any = 'Apple';
    component.groceryItem = grocery;

    const sampleObservable: Observable<any> = new Observable((observer) => {
      observer.next(grocery);
      observer.next();
    });
    spyOn(service, 'create').and.returnValue(sampleObservable);

    component.addGrocery();

    expect(service.create).toHaveBeenCalled();
  });
});
