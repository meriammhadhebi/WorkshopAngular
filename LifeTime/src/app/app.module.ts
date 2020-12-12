import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from "./shared/services/auth.service";

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursComponent } from './cours/cours.component';
import { DetailCoursComponent } from './detail-cours/detail-cours.component';
import { AjoutCoursComponent } from './ajout-cours/ajout-cours.component';
import { SearchComponent } from './search/search.component';
import { AllcoursComponent } from './allcours/allcours.component';
import { AllentraineurComponent } from './allentraineur/allentraineur.component';
import { AjoutentraineurComponent } from './ajoutentraineur/ajoutentraineur.component';
import { LoginComponent } from './login/login.component';
import { CalculIMCComponent } from './calcul-imc/calcul-imc.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursComponent,
    DetailCoursComponent,
    AjoutCoursComponent,
    SearchComponent,
    AllcoursComponent,
    AllentraineurComponent,
    AjoutentraineurComponent,
    LoginComponent,
    CalculIMCComponent,
    AboutusComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCZGx3gg0MmZVKxvs-dNMuQBzQ-8fjJhbA",
      authDomain: "lifetime-3238a.firebaseapp.com",
      projectId: "lifetime-3238a",
      storageBucket: "lifetime-3238a.appspot.com",
      messagingSenderId: "1023409767834",
      appId: "1:1023409767834:web:767daa0c08664ac6baa623",
      measurementId: "G-Y5CM9Y1FSW",
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
