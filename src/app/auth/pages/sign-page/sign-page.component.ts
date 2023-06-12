import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/app.service';
import { Router } from '@angular/router';

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

  constructor( private miBackendService: BackendService, private router: Router) {}

  createUser(userNameGiven: string, emailGiven: string, passwordGiven:string){
    this.userNameGiven = userNameGiven
    this.emailGiven = emailGiven
    this.passwordGIven = passwordGiven
    console.log(userNameGiven)
    this.miBackendService.sendUsers(userNameGiven, emailGiven, passwordGiven);
    this.router.navigate(['xmls'])

  }

  

}
