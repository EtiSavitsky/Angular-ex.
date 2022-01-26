import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBMData } from './ibmdata';

@Injectable()
 export class GetDataService {
    url ='https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo';
 

  getData() {
    return this.http.get<IBMData[]>(this.url);
  }
  constructor(private http:HttpClient) { }

}