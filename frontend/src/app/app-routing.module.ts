import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";
const routes: Routes = [
  //path is the url path for the app, component specifies what component to be displayed for the path
  {path: 'employees', component: EmployeeListComponent},
  {path: 'newemployee', component: CreateEmployeeComponent},
  {path: 'updateemployee/:id', component: UpdateEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
