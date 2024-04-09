import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddEditComponent } from './components/dashboard/add-edit/add-edit.component';
import { ListUserComponent } from './components/dashboard/list-user/list-user.component';

export const routes: Routes = [{ path: "", component: ListUserComponent },
{ path: "home", component: DashboardComponent},
{ path: "edit/:id", component: AddEditComponent },
{ path: 'list', component: ListUserComponent}];
