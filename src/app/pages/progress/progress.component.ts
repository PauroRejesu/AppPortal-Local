import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css',
  ]
})
export class ProgressComponent  {

    progress1: number = 15;
    progress2: number = 50;

    get getProgress1 (){
      return `${ this.progress1 }%`;
    }

    get getProgress2 (){
      return `${ this.progress2 }%`;
    }

    changeValueChild( value: number){
      // console.log('HEYY', value);
      this.progress1 = value;
    }

}
