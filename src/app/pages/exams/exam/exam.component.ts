import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})
export class ExamComponent implements OnInit {
  isShown: boolean = false;
  quiz:any ;
 
  constructor(private apiService: ApiService){}

  toggle() {
    this.isShown = !this.isShown;
    console.log(this.isShown);
  }
  ngOnInit(): void {
  console.log("ng on init")
    this.apiService.getQuizById(1).subscribe(
      (res)=> this.quiz =res)
  }
}
