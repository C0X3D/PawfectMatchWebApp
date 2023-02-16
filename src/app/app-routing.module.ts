import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginControllerComponent } from './common-components/login-controller/login-controller.component';

const routes: Routes = [
  {path:'', component:LoginControllerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
