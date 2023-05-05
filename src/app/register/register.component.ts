import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string = "";
  password: string = "";

  constructor(private auth : AuthService) {}

  ngOnInit(): void {

  }

  register() {
    if(this.username == '') {
      alert('Please enter email')
      return;
    }

    if(this.password == '') {
      alert('Please eter password');
      return
    }

    this.auth.register(this.username, this.password);
    this.username = '';
    this.password = '';
  }

  


}
