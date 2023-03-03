import { Component, Input,  } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

type Theme = 'light-theme' | 'dark-theme';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {

  @Input() title: string= 'Untitle';

   // Doughnut
   @Input('labels') doughnutChartLabels: string[] = [ 'Data1', 'Data2', 'Data3' ];
   @Input('data') doughnutChartData: ChartData<'doughnut'> = {
     labels: this.doughnutChartLabels,
     datasets: [
       { data: [ 350, 450, 100 ] }
     ]
   };
   public doughnutChartType: ChartType = 'doughnut';


}
