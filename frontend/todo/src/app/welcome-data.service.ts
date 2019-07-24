import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloWorldService(name){
    return this.httpClient.get(`http://localhost:8080/hello-world/path-variable/${name}`);
   // return this.httpClient.get('http://localhost:8080/hello-world-bean/');
    //console.log("Execute Hello World Service")
  }
}
