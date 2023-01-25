import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs';
import { GroceryListService } from 'src/app/services/grocery.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

import { GroceryListComponent } from './grocery-list.component';

describe('GroceryListComponent', () => {
  let component: GroceryListComponent;
  let fixture: ComponentFixture<GroceryListComponent>;
  let service: GroceryListService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroceryListComponent, NavBarComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
      ],
      providers: [GroceryListService],
    }).compileComponents();

    service = TestBed.inject(GroceryListService);
    fixture = TestBed.createComponent(GroceryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove grocery from list', () => {
    const grocery: any = 'Apple';

    const sampleObservable: Observable<any> = new Observable((observer) => {
      observer.next(grocery);
      observer.next();
    });
    spyOn(service, 'delete').and.returnValue(sampleObservable);

    component.removeGrocery(1);

    expect(service.delete).toHaveBeenCalled();
  });
});
