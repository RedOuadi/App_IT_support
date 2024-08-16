import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TechnicianDashboardComponent } from './technician-dashboard/technician-dashboard.component';
import { LoginComponent } from './login/login.component';


import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {EquipmentListComponent} from "./Equipment/equipment-list/equipment-list.component";
import {EquipmentFormComponent} from "./Equipment/equipment-form/equipment-form.component";
import {PanneListComponent} from "./Panne/panne-list/panne-list.component";
import {PanneFormComponent} from "./Panne/panne-form/panne-form.component";
import {PanneDetailComponent} from "./Panne/panne-detail/panne-detail.component";
import {PanneSearchComponent} from "./Panne/panne-search/panne-search.component";
import {PanneEquipmentListComponent} from "./Panne/panne-equipment/panne-equipment-list.component";
import {CreateTicketComponent} from "./Ticket/create-ticket/create-ticket.component";
import {AdminTicketsComponent} from "./Ticket/admin-tickets/admin-tickets.component";
import {TechnicienTicketsComponent} from "./Ticket/technicien-tickets/technicien-tickets.component";
import {TicketListComponent} from "./Ticket/ticket-list/ticket-list.component";
import {UserTicketsComponent} from "./Ticket/user-tickets/user-tickets.component";
import {CountComponent} from "./count/count.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'technician-dashboard', component: TechnicianDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'equipments', component: EquipmentListComponent },
  { path: 'equipments/new', component: EquipmentFormComponent },
  { path: 'equipments/edit/:id', component: EquipmentFormComponent },
  { path: 'pannes', component: PanneListComponent },
  { path: 'pannes/new', component: PanneFormComponent },
  { path: 'pannes/edit/:id', component: PanneFormComponent },
  { path: 'pannes/detail/:id', component: PanneDetailComponent },

  { path: 'pannes/search', component: PanneSearchComponent },
  { path: 'panne-equipment', component: PanneEquipmentListComponent },
  { path: 'create-ticket', component: CreateTicketComponent },
  { path: 'admin-tickets', component: AdminTicketsComponent },
  { path: 'technicien-tickets', component: TechnicienTicketsComponent },
  { path: 'tickets', component: TicketListComponent },
  { path: 'home', component: HomeComponent },
  { path:  'count', component:CountComponent},

  { path: 'admin', component: AdminDashboardComponent, children: [
      { path: 'equipments', component: EquipmentListComponent },
      { path: 'pannes', component: PanneListComponent },
      { path: 'equipments/new', component: EquipmentFormComponent },
      { path: 'admin-tickets', component: TicketListComponent },

      { path: 'pannes/new', component: PanneFormComponent },
      { path: 'pannes/edit/:id', component: PanneFormComponent },
      { path: 'pannes/detail/:id', component: PanneDetailComponent },

      { path: 'equipments/edit/:id', component: EquipmentFormComponent },
      { path: 'users/register', component: RegisterComponent },
      { path: '**', redirectTo: 'admin' }
    ]},

  { path: 'user', component: UserDashboardComponent, children: [
      { path: 'create-ticket', component: CreateTicketComponent },
      {  path : 'my-tickets', component : UserTicketsComponent},
      { path: 'panne-equipment', component: PanneEquipmentListComponent },
      { path: 'user/create-ticket', component: CreateTicketComponent },
      { path: '**', redirectTo: 'user' }
    ]},

  { path: 'technicien', component: TechnicianDashboardComponent, children: [
      { path: 'technician-tickets', component: TechnicienTicketsComponent },
      { path: '**', redirectTo: 'technicien' }
    ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
