import { User } from './../shared/user.interface';
import { AppData } from './../shared/app.data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-counter',
  templateUrl: './user-counter.component.html',
  styleUrls: ['./user-counter.component.css']
})
export class UserCounterComponent implements OnInit {
userLength:number;
  constructor(private appData:AppData) { }

  ngOnInit() {
    this.appData.userLengthSubject.subscribe((len:number)=>{
      this.userLength = len;
      console.log('in counter subscribe')
    });
   this.appData.getUserDataLength();
  }
}
