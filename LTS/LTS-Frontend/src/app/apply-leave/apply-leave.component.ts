import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Location } from '@angular/common';
import { Leave, UserRegister } from '../User';
import { BackendService } from '../backend.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css'],
})
export class ApplyLeaveComponent implements OnInit {
  constructor(
    private location: Location,
    private backendservice: BackendService,
    private messageService:NzMessageService
  ) {}
  leaves: Leave[] = [];
  users: UserRegister[] = [];
  currentUser: UserRegister = {
    leaves: [],
    role: '',
    name: '',
    mobile: '',
    email: '',
    password: '',
    numberOfLeaves: 0,
    remaining_leaves:0
  };
  leave: Leave = {
    name: '',
    email:'',
    type: 'sick leave',
    startDate: '',
    endDate: '',
    reason: '',
    status: 'pending',
    managerReason: '',
  };
  message = '';
  displayMessage = false;
  decision=0;
  //function for applying a leave
  onApplyLeave() {
       //converting the startDate of the leave to the ISO String format
      const startDate = new Date(this.leave.startDate).toISOString();
      //comparing whether the startdate is greater than the current date or not
      if (startDate >= new Date().toISOString()) {
        //converting the endDate of the leave to the ISO String format
        const endDate = new Date(this.leave.endDate).toISOString();
         //comparing whether the endDate is greater than the startDate or not
        if (endDate >= startDate) {
          console.log(2);
          
          this.leave.email= this.currentUser.email
          this.leave.name=this.currentUser.name
         this.backendservice.onApply(this.leave).subscribe(res=>{
          console.log(res.remsize);
          
         if(res.remsize){
          this.messageService.success("Leave Applied Successfully");
        setTimeout(()=>{
          window.location.href=`http://localhost:4200/employee/track-leaves`;
        },1500)

         }else{
          this.messageService.success("Out of Leaves");
         }
           
        })
         // this.messageService.success("Leave Applied Successfully");
        // setTimeout(()=>{
        //   window.location.href=`http://localhost:4200/employee/track-leaves`;
        // },1500)
        } else {
          //displayin error message if the endDate is not greater than startDate
          this.message =
            'End Date must be Start Date or greater than Start Date';
          this.displayMessage = true;
          setTimeout(() => (this.displayMessage = false), 2000);
        }
      } else {
        //displaying error message if the startDate is not greater than the current Date
        this.message = 'Start Date must be from Today or greater';
        this.displayMessage = true;
        setTimeout(() => (this.displayMessage = false), 2000);
      }
    }
  ngOnInit(): void {
    const currentUserData = localStorage.getItem('currentUser');
    if(currentUserData){
      this.currentUser = JSON.parse(currentUserData)
    }else{
      window.location.href='http://localhost:4200/login'
    }

  }
}
