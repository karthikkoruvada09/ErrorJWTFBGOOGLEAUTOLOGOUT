import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServeService } from '../serve.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AutoLogoutService } from '../auto-logout.service';


@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {

  constructor(private ser:ServeService,private router:Router,private route:ActivatedRoute,private autolog:AutoLogoutService) { 
       this.autolog.special();    //calling auto logout service
  }

  


  data:any =[];
  ngOnInit() {
    
    this.ser.specials().subscribe(data=>{
      this.data=data
    },
    error =>{
      console.log(error.status);
      if(error.status===401){
        this.router.navigate(['/login']);
       localStorage.removeItem('token');
      }
    } 
    )
  };


  



}








  

