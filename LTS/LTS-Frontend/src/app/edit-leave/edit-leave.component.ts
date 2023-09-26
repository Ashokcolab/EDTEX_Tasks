import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { Leave, UserRegister } from '../User';
import { BackendService } from '../backend.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-edit-leave',
  templateUrl: './edit-leave.component.html',
  styleUrls: ['./edit-leave.component.css'],
})
export class EditLeaveComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private backendservice:BackendService,
    private messageService : NzMessageService
  ) {}
  leaves: Leave[] = [];
  leaveId!:Number;
  currentUser: UserRegister = {
    role: '',
    name: '',
    mobile: '',
    email: '',
    password: '',
    leaves: [],
    numberOfLeaves: 0,
    remaining_leaves:0
  };
  leave: Leave = {
    id:0,
    email:'',
    name: this.currentUser.name,
    type: '',
    startDate: '',
    endDate: '',
    reason: '',
    status: '',
    managerReason: '',
  };
  message = '';
  displayMessage = false;
  ngOnInit(): void {
    //taking the param from the route
    this.leaveId = this.route.snapshot.params['id'];
    this.backendservice.getLeave(this.leaveId).subscribe(data=>{
      this.leave=data.getleavedata;
    })


    const currentUserData = localStorage.getItem('currentUser');
    //getting the current user data
    if (currentUserData) {
      this.currentUser = JSON.parse(currentUserData);
    }else{
      window.location.href='http://localhost:4200/login'
    }
  }
  //function for saving the changes
  save() {
    //updating the leaves other than the leave which has to be edited
    //this.leaves = this.leaves.filter((leave) => leave.id !== this.leaveId);
    //converting the startDate of the leave to the ISO String format
    const startDate = new Date(this.leave.startDate).toISOString();
    //comparing whether the startdate is greater than the current date or not
    if (startDate >= new Date().toISOString()) {
      //converting the endDate of the leave to the ISO String format
      const endDate = new Date(this.leave.endDate).toISOString();
      //comparing whether the endDate is greater than the startDate or not
      if (endDate >= startDate) {
      this.backendservice.onsave(this.leave).subscribe(data=>{
      console.log(data);
      
      })
      this.messageService.success("Leave Edited Successfully")
      setTimeout(()=>{
        window.location.href="http://localhost:4200/employee/track-leaves"
      },1500)

      
       // window.location.href = 'http://localhost:4200/employee/track-leaves';
      } else {
        //displayin error message if the endDate is not greater than startDate
        this.message = 'End Date must be Start Date or greater than Start Date';
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
}
