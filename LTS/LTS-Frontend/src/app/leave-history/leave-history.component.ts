import { Component, OnInit } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { Leave, UserRegister } from '../User';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css'],
})
export class LeaveHistoryComponent implements OnInit {
  constructor(private backendservice:BackendService){

  }
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
  AcceptedLeaves: Leave[] = [];
  RejectedLeaves: Leave[] = [];
  PendingLeaves: Leave[] = [];
  ngOnInit(): void {
    const currentUserData = localStorage.getItem('currentUser');
    if(currentUserData){
      this.currentUser = JSON.parse(currentUserData)
    }else{
      window.location.href='http://localhost:4200/login'
    }
    this.backendservice.onTrack(this.currentUser.email).subscribe(data=>{
      this.currentUser.leaves=data.leavelist;
      this.AcceptedLeaves = this.currentUser.leaves.filter(
        (leave) => leave.status === 'accepted'
      );
      console.log(this.AcceptedLeaves.length)
      this.RejectedLeaves = this.currentUser.leaves.filter(
        (leave) => leave.status === 'rejected'
      );
      this.PendingLeaves = this.currentUser.leaves.filter(
        (leave) => leave.status === 'pending'
      );
    })


  }
}
