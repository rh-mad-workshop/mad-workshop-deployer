import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
