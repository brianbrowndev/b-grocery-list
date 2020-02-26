import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { MealPlanRecipe, MealPlan } from '@app/models';
import { ApiService } from '@app/api.service';
import { AppService } from '@app/app.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnChanges {


  @Input() mealPlan: MealPlan;
  recipes: Observable<MealPlanRecipe[]>;

  constructor(
    public appService: AppService,
    public apiService: ApiService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['mealPlan']) {
      this.recipes = this.apiService.getMealPlanRecipes(this.mealPlan.id);
    }
  }

}
