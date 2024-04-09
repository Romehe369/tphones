import { Component } from '@angular/core';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ListUserComponent } from "./list-user/list-user.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [AddEditComponent, ListUserComponent]
})
export class DashboardComponent {

}
