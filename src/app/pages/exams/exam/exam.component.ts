import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})
export class ExamComponent implements OnInit {
  isShown: boolean = false;
 
  constructor(private apiService: ApiService){}

  toggle() {
    this.isShown = !this.isShown;
    console.log(this.isShown);
  }
  ngOnInit(): void {
    console.log("ng on init")
    this.apiService.getQuizById(1).subscribe(
      (res)=> console.log(res))
  }
}
