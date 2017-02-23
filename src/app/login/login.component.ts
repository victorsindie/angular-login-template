import { Component, OnInit } from '@angular/core';
import { moveIn } from '../app.routes.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
