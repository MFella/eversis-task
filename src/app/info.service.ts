import { Injectable, HostListener } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { UserInfo } from './models/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    alert('By refreshing this page you may lost all data.');
}


  public infoSub = new BehaviorSubject<UserInfo>(null);
  public pers: UserInfo;

  constructor() { }

  assign(info: UserInfo)
  {
    this.pers = info;
  }
}
