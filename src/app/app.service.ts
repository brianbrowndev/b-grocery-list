import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MealPlan } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

   // Observable string sources
  private mealPlan = new Subject<any>();
 
  // Observable string streams
  mealPlan$ = this.mealPlan.asObservable();
 
  // Service message commands
  setMealPlan(mealPlan: MealPlan) {
    this.mealPlan.next(mealPlan);
  }

  // Observable string sources
  private sidePanel = new Subject<any>();
 
  // Observable string streams
  sidePanel$ = this.sidePanel.asObservable();
 
  // Service message commands
  setSidePanel(open: boolean) {
    this.sidePanel.next(open);
  }


}
