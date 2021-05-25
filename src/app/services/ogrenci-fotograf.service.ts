import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OgrenciFotograf } from '../models/fotografModels/ogrenciFotograf';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/ResponseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class OgrenciFotografService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = 'https://localhost:44390/api/ogrencilerfotograflar/'

  add( image : File , ogrenciId:number):Observable<ResponseModel> {
    const formData:FormData = new FormData();
    formData.append('Image',image)
    formData.append('OgrenciId', ogrenciId.toString())
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",formData,{reportProgress:true, responseType: 'json'})
  }

  delete(id : number):Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(this.apiUrl+"delete?id="+id)
  }

  update(image : File , ogrenciId:number):Observable<ResponseModel> {
    const formData:FormData = new FormData();
    formData.append('Image',image)
    formData.append('OgrenciId', ogrenciId.toString())
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",formData,{reportProgress:true, responseType: 'json'})
  }

  getall():Observable<ListResponseModel<OgrenciFotograf>> {
    return this.httpClient.get<ListResponseModel<OgrenciFotograf>>(this.apiUrl+"getall")
  }

  getById(id : number):Observable<SingleResponseModel<OgrenciFotograf>> {
    return this.httpClient.get<SingleResponseModel<OgrenciFotograf>>(this.apiUrl+"getbyid?id="+id)
  }

  getByOgrenciId(id : number):Observable<SingleResponseModel<OgrenciFotograf>> {
    return this.httpClient.get<SingleResponseModel<OgrenciFotograf>>(this.apiUrl+"getbyogrenciid?ogrenciId="+id)
  }
}
