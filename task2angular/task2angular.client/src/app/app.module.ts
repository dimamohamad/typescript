import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './dima29/nav-bar/nav-bar.component';
import { ServicesComponent } from './dima29/services/services.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './dima29/home/home.component';
import { SubServiceComponent } from './dima29/sub-service/sub-service.component';
import { LectureComponent } from './dima29/lecture/lecture.component';
import { FormsModule, NgForm } from '@angular/forms';
import { SubsicriptionComponent } from './dima29/subsicription/subsicription.component';
import { DetailsComponent } from './dima29/details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServicesComponent,
    SubServiceComponent,
    LectureComponent,
    SubsicriptionComponent,
    DetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "Services", component: ServicesComponent },
      { path: "SubServices/:id", component: SubServiceComponent },
      { path: "details/:id", component: DetailsComponent },
      { path: "Lecture", component: LectureComponent },
      { path: "Subsicription", component: SubsicriptionComponent },


    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
