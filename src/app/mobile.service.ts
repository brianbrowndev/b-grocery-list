import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {BreakpointObserver} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(
    readonly breakpointObserver: BreakpointObserver
  ) { }

   // Observable string sources
  private isMobile = new Subject<boolean>();
 
  // Observable string streams
  isMobile$ = this.isMobile.asObservable();
 
  // Service message commands
  setMobile(isMobile: boolean) {
    this.isMobile.next(isMobile);
  }

  get _isMobile () {
      return this.breakpointObserver.isMatched('(max-width: 599px)');
  }
 
}
