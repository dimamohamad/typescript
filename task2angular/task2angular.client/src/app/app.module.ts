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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServicesComponent,
    SubServiceComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "Services", component: ServicesComponent },
      { path: "SubServices/:id", component: SubServiceComponent }

    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
