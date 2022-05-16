import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private answersIds = new BehaviorSubject([]);
  currentAnswersIds = this.answersIds.asObservable();

  updateAnswersIds(ansIds:any) {
    this.answersIds.next(ansIds)
  }

  constructor() { }
}
