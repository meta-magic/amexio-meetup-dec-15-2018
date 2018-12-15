import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateformdemo',
  templateUrl: './templateformdemo.component.html',
  styleUrls: ['./templateformdemo.component.css']
})
export class TemplateformdemoComponent implements OnInit {
  userRegistration: userRegistration;

  constructor() {
    this.userRegistration = new userRegistration();
   }
  ngOnInit() {
  }

}

export class userRegistration {
  firstName: string;
  lastName: string;
  agree: boolean;
  address: string;
}
