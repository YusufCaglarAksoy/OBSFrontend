import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class IdareciLoginGuard implements CanActivate {

  constructor(private localStorageService:LocalStorageService,
    private toastrService:ToastrService,
     private router:Router){

 }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.localStorageService.get('user')[0].unvanId===5||this.localStorageService.get('user')[0].unvanId===7||this.localStorageService.get('user')[0].unvanId===6){
        return true;
      }else if(!this.localStorageService.get('user')){
        this.router.navigate(["idareci/login"])
        this.toastrService.error("Sisteme giriş yapmalısınız")
        return false;
      }else{
        this.router.navigate(["idareci/login"])
        this.toastrService.info("Sisteme idareci girişi yapmalısınız")
        return false;
      }
  }
  
}
