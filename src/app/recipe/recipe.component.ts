import { Component, OnInit } from '@angular/core';
import { MealPlanGrocery, MealPlan, MealPlanRecipe, RecipeIngredient } from '@app/models';
import { ApiService } from '@app/api.service';
import { AppService } from '@app/app.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  mealPlan: Observable<MealPlan>;
  recipe: Observable<MealPlanRecipe>;
  recipeIngredients: Observable<RecipeIngredient[]>;

  constructor(
    readonly route: ActivatedRoute,
    readonly appService: AppService,
    readonly apiService: ApiService
  ) {}

  ngOnInit() {        
    this.route.params.subscribe(params => {
      const mealPlanId = params['id'];
      const recipeId = params['recipeId'];
      this.apiService.getMealPlan(mealPlanId).subscribe(mealPlan => {
        this.appService.setMealPlan(mealPlan);
      })
      this.recipe = this.apiService.getMealPlanRecipe(recipeId);
      this.recipeIngredients = this.apiService.getRecipeIngredients(recipeId);
    });
  }
}

