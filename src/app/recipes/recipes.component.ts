import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MealPlanRecipe, MealPlan } from '@app/models';
import { ApiService } from '@app/api.service';
import { AppService } from '@app/app.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {


  @Input() mealPlan: MealPlan;
  recipes: Observable<MealPlanRecipe[]>;

  constructor(
    public appService: AppService,
    public apiService: ApiService
  ) { }

  ngOnInit() {
      this.recipes = this.apiService.getMealPlanRecipes(this.mealPlan.id);
      this.appService.mealPlan$.subscribe(mealPlan => {
        this.mealPlan = mealPlan;
        this.recipes = this.apiService.getMealPlanRecipes(this.mealPlan.id);
      })
  }

}
