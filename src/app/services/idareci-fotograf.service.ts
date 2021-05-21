import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdareciFotograf } from '../models/fotografModels/idareciFotograf';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class IdareciFotografService {
  apiUrl = 'https://localhost:44390/api/idarecifotograflar/'
  constructor(private httpClient:HttpClient) { }

  add(idareciFotograf:IdareciFotograf):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",idareciFotograf);
  }

  update(idareciFotograf:IdareciFotograf):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",idareciFotograf);
  }

  delete(id:number):Observable<ResponseModel>{
    return this.httpClient.get<ResponseModel>(this.apiUrl+"delete?id="+id);
  }
  getAll():Observable<ListResponseModel<IdareciFotograf>>{
    return this.httpClient.get<ListResponseModel<IdareciFotograf>>(this.apiUrl+"getall");
  }
  getById(id:number):Observable<ListResponseModel<IdareciFotograf>>{
    return this.httpClient.get<ListResponseModel<IdareciFotograf>>(this.apiUrl+"GetById?getbyid="+id);
  }
  getByIdareciId(idareciId:number):Observable<ListResponseModel<IdareciFotograf>>{
    return this.httpClient.get<ListResponseModel<IdareciFotograf>>(this.apiUrl+"GetById?getbyidareciid="+idareciId);
  }
}
