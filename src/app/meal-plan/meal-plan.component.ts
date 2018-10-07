import { Component, Input } from '@angular/core';
import { MealPlan } from '@app/models';

@Component({
    selector: 'app-meal-plan',
    templateUrl: './meal-plan.component.html',
    styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent {

    @Input() mealPlan: MealPlan;
    open: boolean = false;

    constructor(
    ) {
    }

}
