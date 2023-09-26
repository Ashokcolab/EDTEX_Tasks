import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../User';
import { BackendService } from '../backend.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  oldNumberOfLeaves: number = 0;
  numberOfLeaves!: number;
  users: UserRegister[] = [];
  constructor(private backendservice:BackendService,private messageService : NzMessageService){
  }
  ngOnInit(): void {
  }
  onSubmit() {
    this.backendservice.onUpdate(this.numberOfLeaves).subscribe(data=>{
      if(data.status === "OK"){
        window.location.href = 'http://localhost:4200/manager/new-requests';
      }else{
        this.messageService.error("One or More employess having accepted leaves greater than the given number of leaves");
      }
    })
  }
}
