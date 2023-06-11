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
  colData : Columnoide[] = [{'Columna1': "Title", 'Columna2': "Values"}]
  colDataTemp2 : Columnoide[] = []
  colDataTemp: Columnoide[] = []
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
    
    //this.colData = [{'Columna1': this.arn[0][0], 'Columna2':this.arn[0][1], 'Columna3':this.arn[0][2]},
    //{'Columna1': this.arn[1][0], 'Columna2':this.arn[1][1], 'Columna3':this.arn[1][2]},
    //{'Columna1': this.arn[2][0], 'Columna2':this.arn[2][1], 'Columna3':this.arn[2][2]}]

  }

  sendCommit(dataGiven: string){
    console.log(dataGiven)
    this.dataGiven = dataGiven
    console.log(this.dataGiven)
    this.miBackendService.sendCommit(dataGiven);
  }

  diosPorfa(){
    this.miBackendService.getXml().subscribe( resultado =>{
      this.arn = resultado;
    })
    console.log(this.arn[0].length)

    let sizeOut= this.arn.length

    if (sizeOut == 1){
      for(let i = 0; i < sizeOut; i++){
        this.colDataTemp = [{'Columna1' : this.arn[i][0] }]
        this.colData = this.colData.concat(this.colDataTemp)
      }
    }

    if (sizeOut == 2){
      for(let i = 0; i < sizeOut; i++){
        this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1] }]
        this.colData = this.colData.concat(this.colDataTemp)
      }
    }

    if (sizeOut == 3){
      for(let i = 0; i < sizeOut; i++){
        this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2] }]
        this.colData = this.colData.concat(this.colDataTemp)
      }
    }

    if (sizeOut == 4){
      for(let i = 0; i < sizeOut; i++){
        this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
      'Columna4': this.arn[i][3] }]
        this.colData = this.colData.concat(this.colDataTemp)
      }
    }
    
    console.log(this.colData[0].Columna1)
    
      

   
    
    

  }


  
  
  

  

}
