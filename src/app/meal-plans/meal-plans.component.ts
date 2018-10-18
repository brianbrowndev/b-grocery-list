import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  MealPlan } from '@app/models';
import { ApiService } from '@app/api.service';


@Component({
  selector: 'app-meal-plans',
  templateUrl: './meal-plans.component.html',
  styleUrls: ['./meal-plans.component.scss']
})
export class MealPlansComponent implements OnInit {



  mealPlans: Observable<MealPlan[]>;

  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit() {
      this.mealPlans = this.apiService.getMealPlans();
  }



}
