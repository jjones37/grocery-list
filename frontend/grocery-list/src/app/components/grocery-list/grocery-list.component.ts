import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  ngOnInit(): void {
    this.groceryList = this.groceryService.getAll();
  }
}
