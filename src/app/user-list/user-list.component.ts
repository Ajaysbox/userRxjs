import { User } from './../shared/user.interface';
import { AppData } from './../shared/app.data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

users:User[];
  constructor(private appData:AppData) { }

  ngOnInit() {
    this.appData.userSubject.subscribe((data:User[])=>{
      this.users = data;
    });
    this.appData.intializeAppData();
  }

}
