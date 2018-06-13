import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { CarComponent } from './car/car.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'car',
    component: CarComponent,
    data: { title: 'Book List' }
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
