import { Component, OnInit, ViewChild  } from '@angular/core';
import { MealPlan } from '@app/models';
import { ApiService } from '@app/api.service';
import { Observable } from 'rxjs';
import { MealPlanComponent } from './meal-plan/meal-plan.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mealPlan: Observable<MealPlan>;
  title = 'groceries';

  @ViewChild(MealPlanComponent)
  mealPlanComponent: MealPlanComponent;
  constructor(
      public apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.mealPlan = this.apiService.getLatestMealPlan()
  }

}
