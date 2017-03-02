import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
        { path: '', component: ListComponent },
        { path: ':id', component: DetailComponent }
    ])
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
