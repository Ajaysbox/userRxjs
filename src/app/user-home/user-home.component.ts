import { AppData } from './../shared/app.data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private appData:AppData) { }

  ngOnInit() {
    
  }
deleteUser(){
  //this.appData.deleteUser();
}
}
