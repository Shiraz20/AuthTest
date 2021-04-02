import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  user:any;
  constructor(private http:HttpClient) { }

  ngOnInit(){

    const headers=new HttpHeaders 
    ({
      'Authorization':'Bearer ${localStorage.getItem("Token")}'
      //Authorization: "Bearer" + localStorage.getItem("token")
    });

    this.http.get('http://localhost:8000/user',{headers:headers}).subscribe(
      result => this.user = result
    );
  }

}
