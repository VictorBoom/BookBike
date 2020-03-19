import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public LoginPage: ModalController) { }

  ngOnInit() {
  }

  @Output() loginStatus = new EventEmitter();

  login(){
    this.LoginPage.dismiss()
  }

}
