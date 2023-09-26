import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Leave, UserRegister } from '../User';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-new-requests',
  templateUrl: './new-requests.component.html',
  styleUrls: ['./new-requests.component.css'],
})
export class NewRequestsComponent implements OnInit {
  isVisible = false;
  flag : boolean = true;
  id !: Number;
  constructor(
    private backendservice:BackendService,
    private messageService:NzMessageService
    ){

  }

  showModal(flag : boolean , id : Number): void {
    this.isVisible = true;
    this.flag = flag
    this.id = id
  }
  
  handleOk(): void {
    if(this.flag){
      this.accept(this.id);
    }
    else{
      this.reject(this.id);
    }
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  
  users: UserRegister[] = [];
  pendingLeaves: Leave[] = [];
  leaves: Leave[] = [];
  managerMessage: string = '';
  acceptIcon = faCheck;
  rejectIcon = faXmark;
  ngOnInit(): void {

    this.backendservice.onNewRequests().subscribe(data=>{
      this.pendingLeaves=data.newrequestlist;
      console.log(data);
      
    })
   

    const currentUserData = localStorage.getItem('currentUser')
    if(currentUserData){
      console.log("hi");
    }
    else{
      window.location.href='http://localhost:4200/login'
    }
    
    
  }
  //function for accepting the leave based on the leave id
  accept(id: Number) {
    
    this.backendservice.onAccept(this.id,this.managerMessage).subscribe(data=>{
      console.log(data);

    })
    this.messageService.success("Applied Leave Accepted")
    setTimeout(()=>{
      location.reload();
    },1500)
    // location.reload();

  
  }
  //function for rejecting a leave
  reject(id: Number) {
    this.backendservice.onReject(this.id,this.managerMessage).subscribe(data=>{
      console.log(data);
    })
    this.messageService.success("Applied Leave Rejected")
    setTimeout(()=>{
      location.reload();
    },1500)
    // location.reload();
  }
}
