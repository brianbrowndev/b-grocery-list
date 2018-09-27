import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MealPlanRecipe, MealPlanGrocery, MealPlan } from '@app/models';
import { ApiService } from '@app/api.service';

@Component({
    selector: 'app-meal-plan',
    templateUrl: './meal-plan.component.html',
    styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent implements OnInit {

    mealPlan: MealPlan;
    recipes: Observable<MealPlanRecipe[]>;
    groceriesByCategory: { [key: string]: MealPlanGrocery[] } = {};

    constructor(
        public apiService: ApiService
    ) {
    }

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.apiService.getLatestMealPlan().subscribe(o => {
            this.mealPlan = o;
            this.recipes = this.apiService.getMealPlanRecipes(o.id);
            this.apiService.getMealPlanGroceries(o.id).subscribe(
                g => this.groceriesByCategory = this.categorizeGroceries(g)
            );
        });
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
            data[category].push(g);
        });
        return data;
    }
}
