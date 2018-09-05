import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenService } from '../../services/authen.service';
import { Token } from '../../models/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;

  constructor(private builder : FormBuilder, private authen : AuthenService) { }

  ngOnInit() {
    this.loginForm = this.builder.group({
       login: '',
       password: ''
    });
  }

  login(){
    console.log(this.loginForm.value);
    this.authen.login(this.loginForm.value).subscribe((res : Token )=> {
      console.log(res)
    });
  }

}
