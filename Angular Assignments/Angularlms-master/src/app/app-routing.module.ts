import { AddPatronComponent } from './add-patron/add-patron.component';
import { AddBookComponent } from './add-book/add-book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavpageComponent } from './navpage/navpage.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { PromptComponent } from './prompt/prompt.component';
import { PatronpromptComponent } from './patronprompt/patronprompt.component';
import { BorrowpromptComponent } from './borrowprompt/borrowprompt.component';
import { ReturnpromptComponent } from './returnprompt/returnprompt.component';
import { BookListComponent } from './book-list/book-list.component';
import { DisplaybookComponent } from './displaybook/displaybook.component';
import { PatronListComponent } from './patron-list/patron-list.component';
import { UpdatebComponent } from './updateb/updateb.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'addbook',component:AddBookComponent},
  {path:'addpatron',component:AddPatronComponent},
  {path:'navpage',component:NavpageComponent},
  {path:'home',component:HomeComponent},
  {path:'borrowbook',component:BorrowBookComponent},
  {path:'returnbook',component:ReturnBookComponent},
  {path:'prompt',component:PromptComponent},
  {path:'patronprompt',component:PatronpromptComponent},
  {path:'borrowprompt',component:BorrowpromptComponent},
  {path:'returnprompt',component:ReturnpromptComponent},
  {path:'book-list',component:BookListComponent},
  {path:'displaybook',component:DisplaybookComponent},
  {path:'patron-list',component:PatronListComponent},
  {path:'updateb',component:UpdatebComponent}
 
  // {path:'',redirectTo:'/home',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
