import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  larray: any[] = [];
  loginObj: any = {
    uname: '',
    pwd: ''
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if (localData) {
      this.larray = JSON.parse(localData);
    }
  }

  Onlogin(): void {
    const isUserExist = this.larray.find(
      (user: any) =>
        user.userName === this.loginObj.uname && user.password === this.loginObj.pwd
    );

    if (isUserExist) {
      localStorage.setItem('current_user', this.loginObj.uname);
      alert('User logged in successfully');
      this.router.navigate(['/navpage']); // Redirect to 'navpage' on successful login
    } else {
      alert('Invalid credentials');
    }
  }
}
