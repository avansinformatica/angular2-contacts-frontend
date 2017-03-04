import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoDetailComponent } from './components/todo-detail/detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '/:id', component: TodoDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
