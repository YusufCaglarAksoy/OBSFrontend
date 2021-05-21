import { RegisterDto } from "./registerDto";

export interface OgrenciForRegisterDto extends RegisterDto{
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