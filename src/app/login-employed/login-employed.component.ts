import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-employed',
  templateUrl: './login-employed.component.html',
  styleUrls: ['./login-employed.component.css'],
})
export class LoginEmployedComponent implements OnInit {
  @ViewChild('login') filterChangeClients!: NgForm;
  constructor() {}

  ngOnInit(): void {}

  onLogin(e: any) {
    if (e.value.user === 'Juan') {
      console.log("hola")
      if (e.value.pin === '1234') {
        console.log("guay")
      } else {
        console.log("mal")
      }
    }
  }
}
