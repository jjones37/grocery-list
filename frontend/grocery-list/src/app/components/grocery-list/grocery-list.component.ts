import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Grocery } from 'src/app/objects/Grocery';
import { GroceryListService } from 'src/app/services/grocery.service';

@Component({
  selector: 'grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css'],
})
export class GroceryListComponent implements OnInit {
  groceryList!: Observable<Grocery[]>;

  constructor(private groceryService: GroceryListService) {}

  //On load gets a list of all of the groceries
  ngOnInit(): void {
    this.groceryList = this.groceryService.getAll();
  }

  //Removes groceries based on button clicked
  removeGrocery(id: number): void {
    this.groceryService
      .delete(id)
      .pipe(
        tap(() => {
          this.groceryService.refresh();
        })
      )
      .subscribe();
  }
}
