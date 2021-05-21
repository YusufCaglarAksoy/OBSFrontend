import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mail } from '../models/mail';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  
  apiUrl = 'https://localhost:44390/api/mailler/'

  constructor(private httpClient:HttpClient) { }

  add(mail:Mail):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",mail);
  }

  update(mail:Mail):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",mail);
  }

  delete(id:number):Observable<ResponseModel>{
    return this.httpClient.get<ResponseModel>(this.apiUrl+"delete?id="+id);
  }
  getAll():Observable<ListResponseModel<Mail>>{
    return this.httpClient.get<ListResponseModel<Mail>>(this.apiUrl+"getall");
  }
  getById(id:number):Observable<ListResponseModel<Mail>>{
    return this.httpClient.get<ListResponseModel<Mail>>(this.apiUrl+"GetById?id="+id);
  }
  getByGonderenMail(mail:Mail):Observable<ListResponseModel<Mail>>{
    return this.httpClient.get<ListResponseModel<Mail>>(this.apiUrl+"getByGonderenMail?email="+mail);
  }
  getByAliciMail(mail:Mail):Observable<ListResponseModel<Mail>>{
    return this.httpClient.get<ListResponseModel<Mail>>(this.apiUrl+"getByAliciMail?email="+mail);
  }
}
