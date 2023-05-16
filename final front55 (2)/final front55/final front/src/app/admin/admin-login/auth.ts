import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Auth implements CanActivate {
  constructor(private route:Router){}
  canActivate():boolean{
    if(localStorage.getItem('adminUser')){
      //this.route.navigate(['profile'])
      return true;
      
    }
    else{
      this.route.navigate(['/login']);
      alert("Please Login")
      return false;

    }
  }
  
}