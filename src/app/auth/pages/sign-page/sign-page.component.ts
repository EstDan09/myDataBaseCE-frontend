import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/app.service';
import { User } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-sign-page',
  templateUrl: './sign-page.component.html',
  styles: [
  ]
})
export class SignPageComponent {

  userNameGiven: string = ''
  emailGiven: string = ''
  passwordGIven: string = ''

  constructor( private miBackendService: BackendService) {}

  createUser(userNameGiven: string, emailGiven: string, passwordGiven:string){
    this.userNameGiven = userNameGiven
    this.emailGiven = emailGiven
    this.passwordGIven = passwordGiven
    console.log(userNameGiven)
    this.miBackendService.sendUsers(userNameGiven, emailGiven, passwordGiven);
  }

  

}
