import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoService } from './services/todo.service';
import { ListComponent } from './components/todo-list/list.component';
import { TodoDetailComponent } from './components/todo-detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    // AppRoutingModule,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
    ,
    RouterModule.forRoot([
        { path: '', component: ListComponent },
        { path: ':id', component: TodoDetailComponent }
    ])
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
