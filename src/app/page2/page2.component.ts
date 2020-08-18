import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { InfoService } from '../info.service';
import { UserInfo } from '../models/UserInfo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit, OnDestroy {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    // Do more processing...
    event.returnValue = false;
}

  constructor(public infoServ: InfoService) { }
  public info: UserInfo;
  public sub: Subscription;

  ngOnInit(): void {
   this.sub =  this.infoServ.infoSub.subscribe((el: UserInfo) => {  
      this.info = el;
    });
    console.log(this.infoServ.pers);
  }


  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

}
