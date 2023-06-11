import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/app.service';
import { User, InfoForTable, Columnoide } from '../../../auth/interfaces/auth.interface';
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
  arn:string[][] = [["hen", "hon", "wer"], ["hol", "art", "erw"], ["dad", "ddd", "wep"]]
  colData : Columnoide[] = []
  colDataTemp : Columnoide[] = []
  displayedColumns: string[] = ['Columna1', 'Columna2', 'Columna3', 'Columna4','Columna5','Columna6'];



  constructor( private miBackendService: BackendService) {}  

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.miBackendService.getNameTable()
    .subscribe( resultado =>{
      this.words = resultado;
    })

    console.log(this.words[0]);

    this.colData = [{'Columna1': this.arn[0][0], 'Columna2':this.arn[0][1], 'Columna3':this.arn[0][2]},
    {'Columna1': this.arn[1][0], 'Columna2':this.arn[1][1], 'Columna3':this.arn[1][2]},
    {'Columna1': this.arn[2][0], 'Columna2':this.arn[2][1], 'Columna3':this.arn[2][2]}]

  }

  sendCommit(dataGiven: string){
    console.log(dataGiven)
    this.dataGiven = dataGiven
    console.log(this.dataGiven)
    this.miBackendService.sendCommit(dataGiven);
  }

  diosPorfa(){
    this.miBackendService.getUser()
    console.log(this.arn[0].length)

    this.colData = [{'Columna1': this.arn[0][0], 'Columna2':this.arn[0][1], 'Columna3':this.arn[0][2]},
    {'Columna1': "fer", 'Columna2':this.arn[1][1], 'Columna3':this.arn[1][2]},
    {'Columna1': this.arn[2][0], 'Columna2':this.arn[2][1], 'Columna3':this.arn[2][2]}]

    console.log(this.colData[0].Columna1)
    
      

   
    
    

  }


  
  
  

  

}
