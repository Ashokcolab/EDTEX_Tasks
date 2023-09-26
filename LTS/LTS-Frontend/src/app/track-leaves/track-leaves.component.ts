import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';
import { UserRegister, Leave } from '../User';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-track-leaves',
  templateUrl: './track-leaves.component.html',
  styleUrls: ['./track-leaves.component.css'],
})
export class TrackLeavesComponent implements OnInit {
  constructor(private backendService :BackendService){}
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
  deleteIcon = faTrashCan;
  editIcon = faPenToSquare;
  leaves: Leave[] = [];
  ngOnInit(): void {
    const currentUserData = localStorage.getItem('currentUser');
    if (currentUserData) {
      this.currentUser = JSON.parse(currentUserData);
    }else{
      window.location.href='http://localhost:4200/login'
    }
    this.backendService.onTrack(this.currentUser.email).subscribe((leavetrack)=>{
      this.leaves = leavetrack.leavelist
      console.log(this.leaves);
      
    })
    
  }
  delete(id: Number) {
    this.backendService.onDelete(id).subscribe(data=>{
      console.log(data)
    })
    window.location.reload();
  }
}
