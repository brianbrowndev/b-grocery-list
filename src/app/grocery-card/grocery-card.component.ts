import { Component, OnInit, Input } from '@angular/core';
import { MealPlanGrocery } from '@app/models';

@Component({
  selector: 'app-grocery-card',
  templateUrl: './grocery-card.component.html',
  styleUrls: ['./grocery-card.component.scss']
})
export class GroceryCardComponent implements OnInit {

  @Input() groceries: MealPlanGrocery[];
  @Input() category: string;

  itemHidden: boolean = false;
  showCard: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  showAll() {
    this.groceries.forEach(g => g.visible = true);
    this.itemHidden = false;
  }

  hideGrocery(grocery: MealPlanGrocery) {
    grocery.visible = false;
    this.itemHidden = true;
  }
}
