import { Component, OnInit } from '@angular/core';
import {ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredient[] = [
    new ingredient('tomatoes',5),
    new ingredient('green pepper',5),
    new ingredient('onions',5),

  ];

  

  constructor() { }

  ngOnInit() {
  }

}
