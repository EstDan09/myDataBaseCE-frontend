import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/app.service';
import { User } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  user!: User

  constructor( private miBackendService: BackendService) {}

  testRice(){
    this.miBackendService.getTest()
    .subscribe( resultado =>{
      this.user = resultado;
    })

    console.log(this.user.userName);

  }

  testPost(){
    this.miBackendService.postTest();
  }

}
