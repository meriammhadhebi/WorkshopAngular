import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { HomeComponent } from './home/home.component';
import { DetailCoursComponent } from './detail-cours/detail-cours.component';
import { AjoutCoursComponent } from './ajout-cours/ajout-cours.component';
import { AllcoursComponent } from './allcours/allcours.component';

const routes: Routes = [
  {path: '' , redirectTo : '/home' , pathMatch : 'full'},
  {path: 'home' , component : HomeComponent},
  {path: 'allcours' , component : AllcoursComponent},
  {path: 'allcours/editcours/:id' , component : AjoutCoursComponent},
  {path: 'cours' , component : CoursComponent},
  {path: 'cours/detail/:id' , component : DetailCoursComponent},
  //{path: '**' , component : NotFoundComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
