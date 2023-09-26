import { Component, OnInit } from '@angular/core';
import { Leave } from '../User';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  constructor(private backendService:BackendService){
  }
  allLeaves: Leave[] = [];
  ngOnInit(): void {
    this.backendService.onPastLeaves().subscribe(data=>{
      this.allLeaves=data.managerpastlist;
      console.log(data);
    })
  }    
}
