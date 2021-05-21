import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fakulte } from '../models/fakulte';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FakulteService {

  constructor(private httpClient :HttpClient) { }

  apiUrl = 'https://localhost:44390/api/fakulteler/'

  add(fakulte : Fakulte):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",fakulte)
  }

  delete(id : number):Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(this.apiUrl+"delete?id="+id)
  }

  update(fakulte : Fakulte):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",fakulte)
  }

  getall():Observable<ListResponseModel<Fakulte>> {
    return this.httpClient.get<ListResponseModel<Fakulte>>(this.apiUrl+"getall")
  }

  getById(id : number):Observable<ListResponseModel<Fakulte>> {
    return this.httpClient.get<ListResponseModel<Fakulte>>(this.apiUrl+"getbyid?id="+id)
  }

}