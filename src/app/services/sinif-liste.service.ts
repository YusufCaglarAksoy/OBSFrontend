import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SinifListeDetayDto } from '../models/detayModels/sinifListeDetayDto';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/ResponseModel';
import { SinifListe } from '../models/sinifListe';

@Injectable({
  providedIn: 'root'
})
export class SinifListeService {
  apiUrl = 'https://localhost:44390/api/sinifListeler/'
  constructor(private httpClient:HttpClient) { }

  add(SinifListe: SinifListe):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",SinifListe);
  }

  update(SinifListe: SinifListe):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",SinifListe);
  }

  delete(id:number):Observable<ResponseModel>{
    return this.httpClient.get<ResponseModel>(this.apiUrl+"delete?id="+id);
  }
  getAll():Observable<ListResponseModel<SinifListeDetayDto>>{
    return this.httpClient.get<ListResponseModel<SinifListeDetayDto>>(this.apiUrl+"getall");
  }
  getById(id:number):Observable<ListResponseModel<SinifListeDetayDto>>{
    return this.httpClient.get<ListResponseModel<SinifListeDetayDto>>(this.apiUrl+"GetById?id="+id);
  }
  getByOgrenciId(ogrenciId:number):Observable<ListResponseModel<SinifListeDetayDto>>{
    return this.httpClient.get<ListResponseModel<SinifListeDetayDto>>(this.apiUrl+"GetByOgrenciId?ogrenciid="+ogrenciId);
  }
  getBySubeId(subeId:number):Observable<ListResponseModel<SinifListeDetayDto>>{
    return this.httpClient.get<ListResponseModel<SinifListeDetayDto>>(this.apiUrl+"getbysubeiid?subeid="+subeId);
  }
  getSinifListeDetaylari():Observable<ListResponseModel<SinifListeDetayDto>>{
    return this.httpClient.get<ListResponseModel<SinifListeDetayDto>>(this.apiUrl+"getSinifListesiDetaylari");
  }
}
