import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

   // Observable string sources
  private menuOpen = new Subject<any>();
 
  // Observable string streams
  menuOpen$ = this.menuOpen.asObservable();
 
  // Service message commands
  openMenu() {
    this.menuOpen.next(null);
  }

}
