import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
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
    readonly mobileService: MobileService,
    readonly changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.isMobile = this.mobileService._isMobile;
    this.mobileService.isMobile$.subscribe(isMobile => {
     this.isMobile = isMobile; 
     this.changeDetectorRef.detectChanges()
    });
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
