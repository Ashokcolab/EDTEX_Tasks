import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  addusers: any[] = [];
  addobj: any = {
    bname: '',
    author:'',
    isbn:'',
    quantity:''
  };

  constructor(private route:Router) { }
  showauthor=false;
  onauthor(){
    const apattern=/^[a-zA-Z]+$/;
    this.showauthor=!apattern.test(this.addobj.author);
  }
  showqua=false;
  onq(){
    const qpatter=/^([1-9])([0-9]*)$/;
    this.showqua=!qpatter.test(this.addobj.quantity);
  }
  showisbn=false;
  onisbn(){
    const ipatter=/^[0-9]+$/;
    this.showisbn=!ipatter.test(this.addobj.isbn);
  }
  showtitle=false;
  ontitle(){
    const pattern=/^[a-zA-Z0-9]+$/;
    this.showtitle=!pattern.test(this.addobj.bname);
  }
  onadd() {
    this.addusers.push({ bookname: this.addobj.bname }); 
    localStorage.setItem('addusers', JSON.stringify(this.addusers));
    alert("Added book successfully go back")
    location.reload();
    // this.route.navigate(['/navpage']);
    
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('addusers');
    if (localData !== null) {
      this.addusers = JSON.parse(localData);
    }
    // this.displayBookNames();
  }


}
