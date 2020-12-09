import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursComponent } from './cours/cours.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailCoursComponent } from './detail-cours/detail-cours.component';
import { AjoutCoursComponent } from './ajout-cours/ajout-cours.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchComponent } from './search/search.component';
import { AllcoursComponent } from './allcours/allcours.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursComponent,
    DetailCoursComponent,
    AjoutCoursComponent,
    SearchComponent,
    AllcoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
