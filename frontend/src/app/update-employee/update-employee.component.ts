import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{
  employee: Employee = new Employee();
  id: number;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {
    //id from route; use activated route
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      data => {
        this.employee = data;
      },
      error => console.log(error)
    );
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      data => {
        //if successfully populated, we go back to the list
        this.goToEmployeeList();
      },
      error => console.log(error)
    );
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
