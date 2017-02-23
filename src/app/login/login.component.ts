import { Component, OnInit } from '@angular/core';
import {MdIconRegistry} from "@angular/material";
import {Http} from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { moveIn } from '../app.routes.animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''},
  viewProviders: [MdIconRegistry]

})
export class LoginComponent implements OnInit {

  constructor(http: Http, iconReg: MdIconRegistry, sanitizer: DomSanitizer) {
    iconReg.addSvgIcon('g-logo', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/g-logo.svg'));
  }

  ngOnInit() {
  }

}
