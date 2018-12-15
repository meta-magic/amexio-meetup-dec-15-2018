import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d3chartdemo',
  templateUrl: './d3chartdemo.component.html',
  styleUrls: ['./d3chartdemo.component.css']
})
export class D3chartdemoComponent implements OnInit {

  constructor() { }
  drillabledata: any;
  ngOnInit() {
    this.drillabledata=["label","value","name"];

  }

}
