import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/app.service';
import { User, InfoForTable } from '../../../auth/interfaces/auth.interface';
import { ContentObserver } from '@angular/cdk/observers';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent {

  words:string[] = ["hola"]
  dataGiven: string = ''

  constructor( private miBackendService: BackendService) {}  

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.miBackendService.getTest2()
    .subscribe( resultado =>{
      this.words = resultado;
    })

    console.log(this.words[0]);
  }

  sendCommit(dataGiven: string){
    console.log(dataGiven)
    this.dataGiven = dataGiven
    console.log(this.dataGiven)
    this.miBackendService.postTest2(dataGiven);
  }


  
  
  

  

}
