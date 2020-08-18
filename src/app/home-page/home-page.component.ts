import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    // Do more processing...s
    event.returnValue = false;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
