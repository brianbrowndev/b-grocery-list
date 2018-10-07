import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MealPlanGrocery, MealPlan } from '@app/models';
import { ApiService } from '@app/api.service';


@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.scss']
})
export class GroceriesComponent implements OnInit {

  @Input() mealPlan: MealPlan;
  groceriesByCategory: { [key: string]: MealPlanGrocery[] } = {};

  constructor(
    readonly apiService: ApiService
  ) { }

  ngOnInit() {
      this.apiService.getMealPlanGroceries(this.mealPlan.id).subscribe(
          g => this.groceriesByCategory = this.categorizeGroceries(g)
      );
  }

  categorizeGroceries(groceries: MealPlanGrocery[]): { [key: string]: MealPlanGrocery[] } {
      let data = {};
      if (!groceries) {
          return data;
      }
      groceries.forEach(g => {
          let category = g.category.replace(" ", "_")
          if (!data.hasOwnProperty(category)) {
              data[category] = [];
          }
          g.visible = true;
          data[category].push(g);
      });
      return data;
  }

}
