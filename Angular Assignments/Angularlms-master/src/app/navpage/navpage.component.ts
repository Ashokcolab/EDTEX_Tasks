import { Component } from '@angular/core';
import { AddBookComponent } from '../add-book/add-book.component';
import { AddPatronComponent } from '../add-patron/add-patron.component';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-navpage',
  templateUrl: './navpage.component.html',
  styleUrls: ['./navpage.component.css']
})
export class NavpageComponent{
  
  userName:any;
  ngOnInit(){
    this.userName = localStorage.getItem('current_user');
    console.log("userName",this.userName);
  }
}
