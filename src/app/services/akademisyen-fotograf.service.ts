import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AkademisyenDetayDto } from '../models/detayModels/akademisyenDetayDto';
import { AkademisyenFotograf } from '../models/fotografModels/akademisyenFotograf';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/ResponseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AkademisyenFotografService {
  constructor(private httpClient : HttpClient) { }

  apiUrl = 'https://localhost:44390/api/akademisyenlerFotograflar/'

  add( image : File , ogrenciId:number):Observable<ResponseModel> {
    const formData:FormData = new FormData();
    formData.append('Image',image)
    formData.append('AkademisyenId', ogrenciId.toString())
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",formData,{reportProgress:true, responseType: 'json'})
  }

  delete(id : number):Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(this.apiUrl+"delete?id="+id)
  }

  update(image : File , ogrenciId:number):Observable<ResponseModel> {
    const formData:FormData = new FormData();
    formData.append('Image',image)
    formData.append('AkademisyenId', ogrenciId.toString())
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",formData,{reportProgress:true, responseType: 'json'})
  }

  getall():Observable<ListResponseModel<AkademisyenFotograf>> {
    return this.httpClient.get<ListResponseModel<AkademisyenFotograf>>(this.apiUrl+"getall")
  }

  getById(id : number):Observable<SingleResponseModel<AkademisyenFotograf>> {
    return this.httpClient.get<SingleResponseModel<AkademisyenFotograf>>(this.apiUrl+"getbyid?id="+id)
  }

  getByAkademisyenId(id : number):Observable<SingleResponseModel<AkademisyenFotograf>> {
    return this.httpClient.get<SingleResponseModel<AkademisyenFotograf>>(this.apiUrl+"getbyakademisyenid?akademisyenId="+id)
  }
}
