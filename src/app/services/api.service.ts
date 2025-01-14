import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  // apiURL: string = 'http://projectegy-003-site13.gtempurl.com';

  constructor(private httpClient: HttpClient) {}

  public getQuizById(id: number){
    return this.httpClient.get(`SolveQuiz/GetQustions?id=${id}`);
  }
  
  public getResult(ansIds:number[]){
    return this.httpClient.post(`SolveQuiz/SolveQuiz`,{
      "forQuizId":1,
      "selectedAnswerIds": [1,4,7]
    });
  }


}
