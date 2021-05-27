import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class OgrenciLoginGuard implements CanActivate {
  constructor(private localStorageService:LocalStorageService,
    private toastrService:ToastrService,
     private router:Router){

 }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.localStorageService.get('user')[0].unvanId===1){
        return true;
      }else if(!this.localStorageService.get('user')){
        this.router.navigate(["ogrenci/login"])
        this.toastrService.error("Sisteme giriş yapmalısınız")
        return false;
      }else{
        this.router.navigate(["ogrenci/login"])
        this.toastrService.info("Sisteme öğrenci girişi yapmalısınız")
        return false;
      }
  }
  
}
