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
  arn:string[][] = [["hen", "hon", "wer"], ["hol", "art", "erw"], ["dad", "ddd", "wep"], ["dad", "ddd", "wep"]]
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

    
    //this.colData = [{'Columna1': this.arn[0][0], 'Columna2':this.arn[0][1], 'Columna3':this.arn[0][2]},
    //{'Columna1': this.arn[1][0], 'Columna2':this.arn[1][1], 'Columna3':this.arn[1][2]},
    //{'Columna1': this.arn[2][0], 'Columna2':this.arn[2][1], 'Columna3':this.arn[2][2]}]

  }

  sendCommit(dataGiven: string){
    console.log(dataGiven)
    this.dataGiven = dataGiven
    this.miBackendService.sendCommit(dataGiven);
  }

  diosPorfa(dataGiven:string){
    this.miBackendService.getXml(dataGiven).subscribe( resultado =>{
      this.arn = resultado;
      console.log("1:",dataGiven)
      console.log("2:",resultado)

      console.log("3:",this.arn)
    
    

      let sizeOut= this.arn.length
      let sizeIn = this.arn[0].length

      console.log("4:",sizeOut)
      console.log("5:",sizeIn)

      this.colData = [{'Columna1': "Title", 'Columna2': "Values"}]

      if (sizeOut == 1){
        
        if (sizeIn == 2){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 3){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 4){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }


        if (sizeIn == 5){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 6){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 7){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 8){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 9){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 10){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8], 'Columna10' : this.arn[i][9]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

      }

      if (sizeOut == 2){

        if (sizeIn == 2){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 3){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 4){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }


        if (sizeIn == 5){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 6){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 7){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 8){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 9){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 10){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8], 'Columna10' : this.arn[i][9]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }


        
      }

      if (sizeOut == 3){

        if (sizeIn == 2){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 3){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 4){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }


        if (sizeIn == 5){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 6){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 7){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 8){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 9){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 10){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8], 'Columna10' : this.arn[i][9]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
      }

      if (sizeOut == 4){
        if (sizeIn == 2){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 3){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 4){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }


        if (sizeIn == 5){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 6){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 7){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 8){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 9){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 10){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8], 'Columna10' : this.arn[i][9]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
      }

      if (sizeOut == 5){

        if (sizeIn == 2){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 3){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 4){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }


        if (sizeIn == 5){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 6){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 7){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 8){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 9){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 10){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8], 'Columna10' : this.arn[i][9]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
      }

      if (sizeOut == 6){
        
        if (sizeIn == 2){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 3){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 4){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }


        if (sizeIn == 5){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 6){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 7){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 8){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 9){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 10){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8], 'Columna10' : this.arn[i][9]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

      }

      if (sizeOut == 7){
        
        if (sizeIn == 2){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 3){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 4){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }


        if (sizeIn == 5){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 6){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 7){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 8){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 9){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 10){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8], 'Columna10' : this.arn[i][9]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

      }

      if (sizeOut == 8){
        
        if (sizeIn == 2){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 3){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 4){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }


        if (sizeIn == 5){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 6){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 7){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 8){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 9){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 10){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8], 'Columna10' : this.arn[i][9]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

      }

      if (sizeOut == 9){
        
        if (sizeIn == 2){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 3){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 4){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }


        if (sizeIn == 5){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 6){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 7){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 8){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 8){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 9){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 10){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8], 'Columna10' : this.arn[i][9]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

      }

      if (sizeOut == 10){
        
        if (sizeIn == 2){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 3){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

        if (sizeIn == 4){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }


        if (sizeIn == 5){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 6){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 7){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6] }]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 8){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 9){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }
    
        if (sizeIn == 10){
          for(let i = 0; i < sizeOut; i++){
            this.colDataTemp = [{'Columna1' : this.arn[i][0], 'Columna2': this.arn[i][1], 'Columna3': this.arn[i][2],
          'Columna4': this.arn[i][3], 'Columna5' : this.arn[i][4], 'Columna6' : this.arn[i][5], 'Columna7' : this.arn[i][6],
          'Columna8' : this.arn[i][7], 'Columna9' : this.arn[i][8], 'Columna10' : this.arn[i][9]}]
            this.colData = this.colData.concat(this.colDataTemp)
          }
        }

      }


      })
      

      
      console.log(this.colData[0].Columna1)
    
      

   
    
    

  }


  
  
  

  

}
