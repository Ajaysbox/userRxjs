import { OnInit, Input } from '@angular/core';
import { User } from './user.interface';
import { Subject } from "rxjs/Subject";
import {usersData} from "./user.data"

export class AppData{
    // to initialize the app with start data.
    //changes like add/delete functions
    //declare a subject to notify all the registered components
    userSubject = new Subject();
    userLengthSubject = new Subject();

    constructor(){console.log('çonstructor')};
   
     braodCast(){
         console.log('in broadcast');
         this.userSubject.next(usersData);
        // this.userLengthSubject.next(usersData.length);
    }

    getUserDataLength(){
        this.userLengthSubject.next(usersData.length);
    }

    intializeAppData(){
        this.braodCast();
    }

    addAppData(user:User){
        usersData.push(user);
         this.braodCast();
         this.getUserDataLength()
    }
    deleteUser(user:User){
       let userIndexToDelete =  usersData.findIndex((elem)=>{
            return elem.id === user.id;
        });
        usersData.splice(userIndexToDelete,1);
        console.log(usersData);
         this.braodCast();
         this.getUserDataLength();
    }
}