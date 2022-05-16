import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';
import { ApiService } from 'src/app/services/api.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})
export class ExamComponent implements OnInit {
  isShown: boolean = false;
  quiz:any ;
  // form = new FormGroup({}) ;
  constructor(private apiService: ApiService, private sharedDataService:SharedDataService,private router: Router){}

  toggle() {
    this.isShown = !this.isShown;
    console.log(this.isShown);
  }

  submit(value:any){
    
    let ansArr = [];
    for(let v of Object.values(value))
    {
      ansArr.push(v);
    }
 
    this.sharedDataService.updateAnswersIds(ansArr);
    this.router.navigateByUrl('result');
  
  }

  ngOnInit(): void {
  console.log("ng on init")
    this.apiService.getQuizById(1).subscribe(
      (res)=> {this.quiz =res; console.log(res)})
  }
}
