import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {
addusers: any[] = [];
ngOnInit(): void {
  const localData = localStorage.getItem('addusers');
  if (localData !== null) {
    this.addusers = JSON.parse(localData);
  }
  console.log("addusers",this.addusers);
}
}
