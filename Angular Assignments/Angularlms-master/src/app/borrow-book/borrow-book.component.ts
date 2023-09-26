import { Component } from '@angular/core';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent {
  borrowobj:any={
    name:'',
    title:''

  };
  showname=false;
  onname(){
    const namepattern=/^[a-zA-Z]+$/;
    this.showname=!namepattern.test(this.borrowobj.name);
  }
  showtitle=false;
  ontitle(){
  const titlepattern=/^[a-zA-Z]+$/;
  this.showtitle=!titlepattern.test(this.borrowobj.title);
  }

}
