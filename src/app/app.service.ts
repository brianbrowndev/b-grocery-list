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

}
