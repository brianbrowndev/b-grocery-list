import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';


// Components
import { MealPlanComponent } from './meal-plan/meal-plan.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { RecipesComponent } from './recipes/recipes.component';
import { GroceryCardComponent } from './grocery-card/grocery-card.component';
import { StorageService } from '@app/storage.service';
import { MealPlansComponent } from './meal-plans/meal-plans.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeComponent } from './recipe/recipe.component';
import { ServiceWorkerModule } from '@angular/service-worker';



@NgModule({
  declarations: [
    AppComponent,
    MealPlanComponent,
    GroceriesComponent,
    RecipesComponent,
    GroceryCardComponent,
    MealPlansComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
