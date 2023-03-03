
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: [
  ]
})
export class IncreaserComponent implements OnInit{

  ngOnInit():void {
    this.btnClass = `btn ${ this.btnClass }`;
  }


  //Para asignar nombres a las variables dentro de delos campos se podria realizar de las siguiente manera:
  //@Input('NombreVariable') progress: number=10  o  @Input() progress: number=10 --> Si no se requiere asignar nombre al valor;

    @Input('valueProgress') value: number=50;
    @Input('colorButton') btnClass: string='btn-warning';
    @Output('valueProgress') valueOutput: EventEmitter<number> = new EventEmitter();


  changeValues(value: number ){
    this.value = value;
  }


  //Validate number imputs change to the limits
  onChange( newValue: number){
      //console.log(event);

    if ( newValue >=100 ){
      this.value=100;
    } else if (newValue <=0){
      this.value=0;
    }else {
      this.value=newValue;
    }

    this.valueOutput.emit(this.value)

  }

  changeValue ( value: number): number {

    if (this.value >= 100 && value >=0 ){
      this.valueOutput.emit(100);
      return this.value = 100;
    }
    if (this.value <= 0 && value < 0 ){
      this.valueOutput.emit(0);
      return this.value = 0;
    }
      this.valueOutput.emit(this.value + value);
      return this.value = this.value + value;

  }

}
