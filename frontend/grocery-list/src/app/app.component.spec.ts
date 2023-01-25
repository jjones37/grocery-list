import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDividerModule } from '@angular/material/divider';
import { AppComponent } from './app.component';

@Component({ selector: 'nav-bar' })
class NavBarComponent {}

@Component({ selector: 'grocery-form' })
class GroceryFormComponent {}

@Component({ selector: 'grocery-list' })
class GroceryListComponent {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDividerModule],
      declarations: [
        AppComponent,
        NavBarComponent,
        GroceryFormComponent,
        GroceryListComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
