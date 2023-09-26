import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { BookListComponent } from './book-list/book-list.component';
import { PatronListComponent } from './patron-list/patron-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddPatronComponent } from './add-patron/add-patron.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { UpdatebComponent } from './updateb/updateb.component';
import { HomeComponent } from './home/home.component';
import { NavpageComponent } from './navpage/navpage.component';
import { PromptComponent } from './prompt/prompt.component';
import { PatronpromptComponent } from './patronprompt/patronprompt.component';
import { BorrowpromptComponent } from './borrowprompt/borrowprompt.component';
import { ReturnpromptComponent } from './returnprompt/returnprompt.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { BooklistComponent } from './booklist/booklist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { DisplaybookComponent } from './displaybook/displaybook.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    EditProfileComponent,
    BookListComponent,
    PatronListComponent,
    AddBookComponent,
    AddPatronComponent,
    BorrowBookComponent,
    ReturnBookComponent,
    UpdatebComponent,
    HomeComponent,
    NavpageComponent,
    PromptComponent,
    PatronpromptComponent,
    BorrowpromptComponent,
    ReturnpromptComponent,
    BooklistComponent,
    DisplaybookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
