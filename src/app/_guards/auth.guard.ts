import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { InfoService } from '../info.service';

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
  
    constructor(private infoServ: InfoService, private router: Router) {}
  
    canActivate(): boolean{
      if(this.infoServ.pers === undefined)
      {
        this.router.navigate(['/page1']);
        alert('You are not allowed to use this page. First of all, fill the information on page1');
        return false;
      }
      
      return true;
    } 
  }
  