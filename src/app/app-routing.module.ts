import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealPlanComponent } from '@app/meal-plan/meal-plan.component';

const appRoutes: Routes = [
    { path: 'meal-plans/:id', component: MealPlanComponent},
    { path: '**', component: MealPlanComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class AppRoutingModule { }