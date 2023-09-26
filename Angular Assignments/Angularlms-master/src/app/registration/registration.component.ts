import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  signupUsers:any[]=[];
  signupObj:any={
    userName:'',
    password:'',
    email:'',
    mobile:''
  };
  showpass=false;
  onpass(){
    const passpattern=/^[a-zA-Z]+$/;
    this.showpass=!passpattern.test(this.signupObj.password);
  }
  shownameError=false;
  onname(){
    const namepattern=/^[a-zA-Z]+$/;
    this.shownameError=!namepattern.test(this.signupObj.userName);
  }
  showMobileError=false;
  onMobileChange() {
    const mobilePattern = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    this.showMobileError = !mobilePattern.test(this.signupObj.mobile);
  }
  showEmailError=false;
  onEmailChange() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.showEmailError = !emailPattern.test(this.signupObj.email);
  }
  constructor(){}
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
    location.reload();
    
    alert("Registered successfully Go back and Login");
    // this.router.navigate(['/navpage']);

  }
  ngOnInit(): void {
    const localData=localStorage.getItem('signupUsers');
    if(localData!=null){
    this.signupUsers=JSON.parse(localData);
}
      
  }
}
