import { Component } from '@angular/core';

@Component({
  selector: 'grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css'],
})
export class GroceryListComponent {
  groceryList: string[] = ['apple', 'banana', 'orange'];
}
