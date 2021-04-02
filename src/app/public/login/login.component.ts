import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

form: FormGroup=new FormGroup({});

  constructor(private fb: FormBuilder , private http:HttpClient) {

   }
   

  ngOnInit() {
    this.form = this.fb.group({
      email:'',
      password:''
    })
  }
  submit()
  {
    const formData = this.form.getRawValue();

    const data={
      username : formData.email,
      password : formData.password,
      grant_type:'password',
      client_id:2,
      client_secret:'n1raNjCWMsLMlNRnfe3lMYT64ci164FhFp3GSJE0',
      scope:'*'
    };
    
    this.http.post('http://localhost:8000/oauth/token',data).subscribe(
      result=>{
        console.log('success');
        console.log(result);
      },
      error=>{
        console.log('erreuuuuurrr');
        console.log(error);
            }
    );
  
}
}
