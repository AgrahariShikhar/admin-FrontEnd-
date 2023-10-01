import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string="http://localhost:8082"
  constructor(private httpClient :HttpClient) { 

  }



  getAllTasksOfUser():Observable<Data[]>{
    let api = `${this.url}/api/v1/get`;
    return this.httpClient.get<Data[]>(api);
  }

}
