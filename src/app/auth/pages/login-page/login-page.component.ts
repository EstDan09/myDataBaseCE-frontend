import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  response:string = ''

  user!: User

  constructor( private miBackendService: BackendService, private router: Router) {}

  getUser(userGiven:string){
    this.miBackendService.getUser(userGiven)
    .subscribe( resultado =>{

      this.response = resultado;

      console.log(this.response[0])

      if (this.response[0] == 'yes'){
        this.router.navigate(['xmls'])
      }

    })


  }

  getUserArduino(){

    this.miBackendService.getUserArduino()
    .subscribe( resultado =>{

      this.response = resultado;

      console.log(this.response[0])

      if (this.response[0] == 'yes'){
        this.router.navigate(['xmls'])
      }

    })
    
  }

  testPost(){
    //this.miBackendService.postTest();
  }

}
