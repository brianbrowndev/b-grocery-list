import { ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { MealPlan } from '@app/models';
import { MediaMatcher } from '@angular/cdk/layout';
import { MobileService } from '@app/mobile.service';

@Component({
    selector: 'app-meal-plan',
    templateUrl: './meal-plan.component.html',
    styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent implements OnDestroy {
    mobileQuery: MediaQueryList;
    _mobileQueryListener: () => void;

    @Input() mealPlan: MealPlan;
    open: boolean = false;


    constructor(
        changeDetectorRef: ChangeDetectorRef,
        mobileService: MobileService,
        media: MediaMatcher,
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
}
