import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  addusers : any[]= [];
  ngOnInit(){
    const localData = localStorage.getItem('addusers');
    
    if (localData !== null) {
      this.addusers = JSON.parse(localData);
    }
    console.log(this.addusers)
  }
}
