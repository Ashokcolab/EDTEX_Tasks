import { Component } from '@angular/core';

@Component({
  selector: 'app-updateb',
  templateUrl: './updateb.component.html',
  styleUrls: ['./updateb.component.css']
})
export class UpdatebComponent {
  onupdate(){
    alert("Updated details successfully");
  }

}
