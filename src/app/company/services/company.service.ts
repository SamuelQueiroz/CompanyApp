import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  readonly rootURL = 'http://localhost:5000/api';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  getData(){
    return this.httpClient.get<Company[]>(this.rootURL + '/Companies');
  }

  postData(formData: any){
    return this.httpClient.post(this.rootURL + '/Companies',formData);
  }

  putData(id: string, formData: any){
    return this.httpClient.put(this.rootURL + '/Companies/' + id,formData);
  }

  deleteData(id: string){
    return this.httpClient.delete(this.rootURL + '/Companies/' + id);
  }

}
