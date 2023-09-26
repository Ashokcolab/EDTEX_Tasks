import { Component } from '@angular/core';

@Component({
  selector: 'app-patron-list',
  templateUrl: './patron-list.component.html',
  styleUrls: ['./patron-list.component.css']
})
export class PatronListComponent {
  addpat : any[]= [];
  ngOnInit(){
    const localData = localStorage.getItem('addpat');
    
    if (localData !== null) {
      this.addpat = JSON.parse(localData);
    }
    console.log(this.addpat)
  }

}
