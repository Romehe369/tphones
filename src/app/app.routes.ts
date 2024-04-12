import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddEditComponent } from './components/dashboard/add-edit/add-edit.component';
import { ListUserComponent } from './components/dashboard/list-user/list-user.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [{ path: "", component: LoginComponent },
{ path: "home", component: DashboardComponent},
{ path: "edit/:id", component: AddEditComponent },
{ path: 'list', component: ListUserComponent}];
