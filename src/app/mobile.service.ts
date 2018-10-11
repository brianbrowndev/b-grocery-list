import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileService {


   // Observable string sources
  private isMobile = new Subject<boolean>();
 
  // Observable string streams
  isMobile$ = this.isMobile.asObservable();
 
  // Service message commands
  setMobile(isMobile: boolean) {
    this.isMobile.next(isMobile);
  }
 
  constructor() { }
}
