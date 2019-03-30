import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  count: BehaviorSubject<number>;
  counter=0;
  constructor() {
    this.count = new BehaviorSubject(this.counter);
   }

  changeValue(){
    this.count.next(++this.counter);
    }
  removeValue(){
    this.count.next(--this.counter);
  }

}
