import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";
import {subscribe} from "diagnostics_channel";
//annotation can be injected into various components
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "http://localhost:8080/api/v1/employees";
  constructor(private httpClient: HttpClient) { }

  //parse employee array since rest endpoint api returns an employee object
  getEmployeeList(): Observable<Employee[]>{
    //return type is employee array
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }
  //send the data in the body of the post method
  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, employee);
  }

  getEmployeeById(id: number) : Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number, employee: Employee) : Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/${id}`,employee);
  }

  deleteEmployee(id: number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
