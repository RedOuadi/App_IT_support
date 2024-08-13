import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TechnicianDashboardComponent } from './technician-dashboard/technician-dashboard.component';
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AppRoutingModule} from "./app-routing.module";
import { EquipmentListComponent } from './Equipment/equipment-list/equipment-list.component';
import { EquipmentFormComponent } from './Equipment/equipment-form/equipment-form.component';
import { PanneListComponent } from './Panne/panne-list/panne-list.component';

import { HomeComponent } from './home/home.component';

import {PanneFormComponent} from "./Panne/panne-form/panne-form.component";
import {PanneSearchComponent} from "./Panne/panne-search/panne-search.component";
import {PanneDetailComponent} from "./Panne/panne-detail/panne-detail.component";
import {PanneEquipmentListComponent} from "./Panne/panne-equipment/panne-equipment-list.component";
import {TicketListComponent} from "./Ticket/ticket-list/ticket-list.component";
import {CreateTicketComponent} from "./Ticket/create-ticket/create-ticket.component";
import {AdminTicketsComponent} from "./Ticket/admin-tickets/admin-tickets.component";
import {TechnicienTicketsComponent} from "./Ticket/technicien-tickets/technicien-tickets.component";

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    TechnicianDashboardComponent,
    LoginComponent,
    RegisterComponent,
    EquipmentListComponent,
    EquipmentFormComponent,
    PanneListComponent,
    PanneFormComponent,
    PanneSearchComponent,
    PanneDetailComponent,
    PanneEquipmentListComponent,
    TicketListComponent,
    CreateTicketComponent,
    AdminTicketsComponent,
    TechnicienTicketsComponent,
    HomeComponent,
    AdminDashboardComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
