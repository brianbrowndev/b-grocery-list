import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MealPlanGrocery } from '@app/models';
import { MobileService } from '@app/mobile.service';
import { MatSelectionList } from '@angular/material';
import { StorageService } from '@app/storage.service';

@Component({
  selector: 'app-grocery-card',
  templateUrl: './grocery-card.component.html',
  styleUrls: ['./grocery-card.component.scss']
})
export class GroceryCardComponent implements OnInit {

  isMobile: boolean;
  expanded: boolean = true;
  @Input() groceries: MealPlanGrocery[];
  @Input() category: string;
  @Input() mealPlanId: string;

  constructor(
    readonly mobileService: MobileService,
    readonly changeDetectorRef: ChangeDetectorRef,
    readonly storageService: StorageService
  ) { }

  ngOnInit() {
    this.isMobile = this.mobileService._isMobile;
    this.mobileService.isMobile$.subscribe(isMobile => {
     this.isMobile = isMobile; 
     this.changeDetectorRef.detectChanges()
    });
    let data = this.storageService.get(this.mealPlanId) || {};
    let selectCount = 0;
    this.groceries.forEach(grocery => {
      grocery.selected = data[grocery.name];
      selectCount += grocery.selected ? 1 : 0;
    });
    this.expanded = selectCount !== this.groceries.length;
  }

  select($event, grocery) {
    let data = this.storageService.get(this.mealPlanId) || {};
    grocery.selected =  !grocery.selected;
    data[grocery.name] = grocery.selected;
    this.storageService.set(this.mealPlanId, data);
  } 
}
