import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  collection = [];
  constructor() {
    for(let i=1; i<=100; i++){
      this.collection.push(`Angular ${i}.0`)
    }
   }

  // ngOnInit() {
  // }

}
