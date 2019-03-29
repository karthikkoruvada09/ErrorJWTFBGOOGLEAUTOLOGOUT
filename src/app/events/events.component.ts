import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';
import { AutoLogoutService } from '../auto-logout.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private ser:ServeService,private autolog:AutoLogoutService) { 
   // this.autolog.special();    //calling auto logout service        since this is visible without logging in also
  }


  data:any =[];
  ngOnInit() {
    this.ser.events().subscribe(data=>{
      this.data=data;
    })
  }

}
