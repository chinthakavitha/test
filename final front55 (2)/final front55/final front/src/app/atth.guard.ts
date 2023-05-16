import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AtthGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate():boolean{
    if(localStorage.getItem('userlog')){
      //this.route.navigate(['profile'])U
      return true;
      
    }
    else{
      this.route.navigate(['/userlogin']);
      alert("Please Login")
      return false;

    }
  }
  
}
