import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/authentication.service"

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email: string;
  password: string;
  constructor(
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }
  signIn() {
    this.authenticationService.SignIn(this.email, this.password);
    this.email = ''; 
    this.password = '';
  }

}
