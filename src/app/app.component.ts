import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  loggedIn=false;
  
  ngOnInit()
  {
      this.loggedIn = localStorage.getItem("token") !== null;
  }

  Logout()
  {
    localStorage.removeItem('token');
  }

}
