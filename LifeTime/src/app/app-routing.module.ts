import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { HomeComponent } from './home/home.component';
import { DetailCoursComponent } from './detail-cours/detail-cours.component';
import { AjoutCoursComponent } from './ajout-cours/ajout-cours.component';
import { AllcoursComponent } from './allcours/allcours.component';
import { AllentraineurComponent } from './allentraineur/allentraineur.component';
import { AjoutentraineurComponent } from './ajoutentraineur/ajoutentraineur.component';


const routes: Routes = [
  {path: '' , redirectTo : '/home' , pathMatch : 'full'},
  {path: 'home' , component : HomeComponent},
  {path: 'allentraineur' , component : AllentraineurComponent},
  {path: 'allentraineur/editentraineur/:id/:val' , component : AjoutentraineurComponent},
  {path: 'allentraineur/addentraineur/:val' , component : AjoutentraineurComponent},
  {path: 'allcours' , component : AllcoursComponent},
  {path: 'allcours/editcours/:id/:val' , component : AjoutCoursComponent},
  {path: 'allcours/addcours/:val' , component : AjoutCoursComponent},
  {path: 'cours' , component : CoursComponent},
  {path: 'cours/detail/:id' , component : DetailCoursComponent},
  //{path: '**' , component : NotFoundComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
