import { Component, OnInit } from '@angular/core';
import { moveIn } from '../app.routes.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''},
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
