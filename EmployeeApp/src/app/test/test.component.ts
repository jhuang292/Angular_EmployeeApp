import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  employees = [];

  constructor() { 
    this.employees = [
      {Id: 1, Name: "Nick", Age: 42, Gender: "M"},
      {Id: 2, Name: "Cassie", Age: 23, Gender: "F"}
    ];
  }

  getSalary(e) {
    if (e.Age<40){
      return e.Age*5+50000;
    }
    else {
      return e.Age*10+50000;
    }
  }



  ngOnInit() {

  }

}
