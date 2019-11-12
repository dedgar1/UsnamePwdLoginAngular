import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/authentication.service"

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.email = ''; 
    this.password = '';
  }

}
