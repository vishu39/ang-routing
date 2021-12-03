import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
  <h3>You selected department with id = {{departmentId}}</h3>
  `,
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId: number | undefined;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   let id = parseInt(params.get('id'));
      this.departmentId = id;
  }
}
