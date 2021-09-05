import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumService {

  constructor(private httpClient: HttpClient) { }

  sum(value1: number, value2: number) {
    return this.httpClient.get(`http://localhost:8080/sum/${value1}/${value2}`)
  }
}
