import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../User';
import { Observable, catchError } from 'rxjs';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor(private registerService : RegisterService){}
  displayMessage: boolean = false;
  message = '';
  users: UserRegister[] = [];
  user: UserRegister = {
    role: 'employee',
    name: '',
    mobile: '',
    email: '',
    password: '',
    leaves: [],
    numberOfLeaves: 0,
    remaining_leaves:0
  };
  onRegister() {
    //filtering the users with given email inorder to avoid redundant data
    const userData = this.users.filter(
      (user) => user.email === this.user.email
    );
    //checking whether any user is already existed with the given email
    if (userData.length) {
      //displaying error message
      this.message = 'User already exists';
      this.displayMessage = true;
      setTimeout(() => (this.displayMessage = false), 2000);
    } else {
      //if no user found with given mail
      //storing the user data into the local storage and update it
      this.users.push(this.user);
      localStorage.setItem('users', JSON.stringify(this.users));
      localStorage.setItem('currentUser',JSON.stringify(this.user));
      //if user is employee redirect them to employee dashboard
      if (this.user.role === 'employee') {
        window.location.href = 'http://localhost:4200/employee';
      }
      //if user is manager redirect them to manager dashboard
      else {
        window.location.href = 'http://localhost:4200/manager';
      }
    }
  }
  register(){
    this.registerService.onRegister(this.user).subscribe(data => {
      console.log(data)
      if(data.status==="BAD_REQUEST"){
        this.message=data.message;
        this.displayMessage=true;
      }
      else{
        localStorage.setItem("currentUser",JSON.stringify(data.user));
        if(data.user.role==="employee"){
          window.location.href='http://localhost:4200/employee';
        }else{
          window.location.href='http://localhost:4200/manager';
        }
      }
    });
      
    // fetch('http://localhost:9090/register',{
      //   method:"POST",
      //   body:JSON.stringify(this.user),
      //   headers:{
      //     "Content-Type":"application/json;charset=UTF-8"
      //   }
      // }).then(data => console.log(data)).catch(err => console.log(err));
  }
  ngOnInit(): void {
    const usersData = localStorage.getItem('users');
    if (usersData) {
      this.users = JSON.parse(usersData);
    }
    const user = localStorage.getItem('currentUser');
    if (user) {
      let userData: UserRegister = JSON.parse(user);
      //if there is already user data in the cookie storage
      //then redirect them to respective dashboards
      if (userData.role === 'employee') {
        window.location.href = 'http://localhost:4200/employee';
      } else {
        window.location.href = 'http://localhost:4200/manager';
      }
    }
    const numberOfLeavesData = localStorage.getItem('numberOfLeaves');
    if(numberOfLeavesData){
      this.user.numberOfLeaves = JSON.parse(numberOfLeavesData)
    }
  }
}
