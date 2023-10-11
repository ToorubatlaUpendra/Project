import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumesComponent } from './resumes/resumes.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: "", component: LoginComponent },

  { path: 'resumes', component: ResumesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
