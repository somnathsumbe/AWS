import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CreateanimaltestService {
   createAnumalTestUrl:string="http://localhost:8024/create-test";
  constructor(private http:HttpClient) { }

  getCreateAnimalTest(createAnimaltest){
    debugger;
    this.http.post<any>(this.createAnumalTestUrl,createAnimaltest ).subscribe(data => {
     return data;
 })
   }
}
