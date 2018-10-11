import { Component, OnInit, Input } from '@angular/core';
import { MealPlanGrocery } from '@app/models';
import { MobileService } from '@app/mobile.service';

@Component({
  selector: 'app-grocery-card',
  templateUrl: './grocery-card.component.html',
  styleUrls: ['./grocery-card.component.scss']
})
export class GroceryCardComponent implements OnInit {

  isMobile: boolean;
  @Input() groceries: MealPlanGrocery[];
  @Input() category: string;

  itemHidden: boolean = false;
  showCard: boolean = true;
  constructor(
    readonly mobileService: MobileService
  ) { }

  ngOnInit() {
    this.mobileService.isMobile$.subscribe(isMobile => {console.log(isMobile); this.isMobile = isMobile});
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
