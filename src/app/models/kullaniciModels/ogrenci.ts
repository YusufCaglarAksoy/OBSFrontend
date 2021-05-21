import { Kullanici } from "./kullanici";

export interface Ogrenci extends Kullanici {
    ogrenciNo : number
    mufredatId : number
    bolumId : number
    aileAdres : string
    aileTelefon : string
    bankaAdi : string
    subeAdi : string
    subeKodu : number
    hesapNumarası : string
    iBAN : string
    hesapSahibininAdiSoyadi : string
    danismanId : number
}