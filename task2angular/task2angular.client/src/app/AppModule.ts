import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DetailsComponent } from "./dima29/details/details.component";
import { DimaAdminComponent } from "./dima29/dima-admin/dima-admin.component";
import { HomeComponent } from "./dima29/home/home.component";
import { LectureComponent } from "./dima29/lecture/lecture.component";
import { NavBarComponent } from "./dima29/nav-bar/nav-bar.component";
import { RegistrationUserComponent } from "./dima29/registration-user/registration-user.component";
import { ServicesComponent } from "./dima29/services/services.component";
import { SubServiceComponent } from "./dima29/sub-service/sub-service.component";
import { SubsicriptionComponent } from "./dima29/subsicription/subsicription.component";
import { UserLoginComponent } from "./dima29/user-login/user-login.component";
import { DashboardComponent } from "./dima29/dima-admin/dashboard/dashboard.component";
import { AddNewServiceComponent } from "./dima29/dima-admin/add-new-service/add-new-service.component";

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        ServicesComponent,
        SubServiceComponent,
        LectureComponent,
        SubsicriptionComponent,
        DetailsComponent,
        RegistrationUserComponent,
        UserLoginComponent,
    DimaAdminComponent,
    DashboardComponent,
    AddNewServiceComponent

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
          {
            path: "Dashboard", component: DashboardComponent, children: [
              { path: "addService", component: AddNewServiceComponent }


            ]
          },
          { path: "Register", component: RegistrationUserComponent },

            { path: "Login", component: UserLoginComponent },
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
