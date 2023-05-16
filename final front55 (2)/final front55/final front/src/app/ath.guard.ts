import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AthGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate():boolean{
    if(localStorage.getItem('adminUser')){
      //this.route.navigate(['profile'])U
      return true;
      
    }
    else{
      this.route.navigate(['/login']);
      alert("Please Login")
      return false;

    }
  }
  
}
