import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Counter-app';
  curVal:number = 0;

  reset(){
    this.curVal = 0
  }

  inc(){
    if (this.curVal<10){
      this.curVal+=1
    }
  }

  dec(){
    if (this.curVal>0){
    this.curVal-=1
    }
  }



  
}

