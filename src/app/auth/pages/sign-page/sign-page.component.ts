import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-page',
  templateUrl: './sign-page.component.html',
  styles: [
  ]
})
export class SignPageComponent {

  constructor( private miBackendService: BackendService) {}

  createUser(userNameGiven: String){
    console.log(userNameGiven)
  }

}
