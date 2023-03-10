import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { GroceryListService } from 'src/app/services/grocery.service';

@Component({
  selector: 'grocery-form',
  templateUrl: './grocery-form.component.html',
  styleUrls: ['./grocery-form.component.css'],
})
export class GroceryFormComponent {
  groceryItem: any;

  constructor(private groceryService: GroceryListService) {}

  //Adds a new grocery to the list
  public async addGrocery(): Promise<void> {
    this.groceryService
      .create(this.groceryItem)
      .pipe(
        tap(() => {
          this.groceryService.refresh();
        })
      )
      .subscribe();
  }
}
