import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { CONTACTUSComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CategoryComponent,
    ProductsComponent,
    AboutUSComponent,
    CONTACTUSComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "category", component: CategoryComponent },
      { path: "product", component: ProductsComponent },
      { path: "About us", component: AboutUSComponent},
      { path: "contactUs", component: CONTACTUSComponent }  


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
