import { Component, OnInit } from '@angular/core';
import { MealPlan } from '@app/models';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '@app/api.service';

@Component({
    selector: 'app-meal-plan',
    templateUrl: './meal-plan.component.html',
    styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent implements OnInit {
    mealPlan: Observable<MealPlan>;

    constructor(
        readonly route: ActivatedRoute,
        readonly apiService: ApiService,
    ) {}

  ngOnInit() {        
    this.route.params.subscribe(params => {
      const mealPlanId = params['id'];
      if (mealPlanId) {
        this.mealPlan = this.apiService.getMealPlan(mealPlanId);
      }
      else {
        this.mealPlan = this.apiService.getLatestMealPlan();
      }
    });
  }



}
