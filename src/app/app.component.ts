import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { MealPlan } from '@app/models';
import { MediaMatcher } from '@angular/cdk/layout';
import { MobileService } from '@app/mobile.service';
import { AppService } from '@app/app.service';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'groceries';

  mobileQuery: MediaQueryList;
  _mobileQueryListener: () => void;

  mealPlan: MealPlan = {} as MealPlan;
  open: boolean = false;


  constructor(
    readonly appService: AppService,
    readonly changeDetectorRef: ChangeDetectorRef,
    readonly mobileService: MobileService,
    readonly media: MediaMatcher,
    readonly titleService: Title
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

  ngOnInit() {
    this.appService.mealPlan$.subscribe(mealPlan => {
      setTimeout(() => 
      this.mealPlan = mealPlan);
      this.titleService.setTitle(`Grocery List | ${mealPlan.name}`);
    });
    this.appService.sidePanel$.subscribe(open => this.open = open);
  }



}
