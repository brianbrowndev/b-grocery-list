import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MealPlan } from '@app/models';
import { MediaMatcher } from '@angular/cdk/layout';
import { MobileService } from '@app/mobile.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '@app/api.service';
import { AppService } from '@app/app.service';

@Component({
    selector: 'app-meal-plan',
    templateUrl: './meal-plan.component.html',
    styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent implements OnDestroy, OnInit {
    mobileQuery: MediaQueryList;
    _mobileQueryListener: () => void;

    mealPlan: Observable<MealPlan>;
    open: boolean = false;


    constructor(
        readonly appService: AppService,
        readonly route: ActivatedRoute,
        readonly apiService: ApiService,
        readonly changeDetectorRef: ChangeDetectorRef,
        readonly mobileService: MobileService,
        readonly media: MediaMatcher,
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => {
            changeDetectorRef.detectChanges();
            mobileService.setMobile(this.mobileQuery.matches);
        };
        this.mobileQuery.addListener(this._mobileQueryListener);
        }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  select(e) {
      console.log(e);

  }

  ngOnInit() {        
    this.appService.menuOpen$.subscribe(() => this.open = !this.open);
    this.route.params.subscribe(params => {
      const mealPlanId = params['id'];
      if (mealPlanId) {
        this.mealPlan = this.apiService.getMealPlan(mealPlanId);
      }
      else {
        this.mealPlan = this.apiService.getLatestMealPlan()
      }
    });
  }



}
