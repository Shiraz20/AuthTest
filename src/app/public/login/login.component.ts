import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

form: FormGroup=new FormGroup({});

  constructor(private fb: FormBuilder ,
              private http:HttpClient,
              private router:Router) {

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
      (result:any)=>{
        //console.log('success');
        //console.log(result);
        localStorage.setItem('token',result.access_token);
        this.router.navigate(['/secure']);
      },
      error=>{
        console.log('erreuuuuurrr');
        console.log(error);
            }
    );
  
}
}
