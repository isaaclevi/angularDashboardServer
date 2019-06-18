import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-ver-board',
  templateUrl: './ver-board.component.html',
  styleUrls: ['./ver-board.component.css']
})
export class VerBoardComponent implements OnInit {

  //public ChartLabels = ['update','outdate'];
  //public ChartData = [100,150];
  //public doughnutChartType = 'doughnut';
  //public ChartOptions = { responsive: true, };
  private present = '80';
  private canv;
  private chart;
  //@Output('newPresent') change = new EventEmitter; 
  

  constructor() { }

  ngOnInit() {
    this.canv = (<HTMLCanvasElement>document.getElementById("doug")).getContext('2d');
    this.chart = this.initChart();
  }

  initChart(){
    Chart.defaults.global.defaultFontFamily='Lato';
    Chart.defaults.global.defaultFontSize=15;
    Chart.defaults.global.defaultFontColor='#777';
    return new Chart(this.canv,{
      type:'doughnut',
      data:{
        labels:['update','outdate'],
        datasets:[{
          label:'ramusage',
          data:[100,150],
          backgroundColor:['red','blue'],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#777'
        }],  
      },
      options:{responsive:false,}
    });
  }

  onClick($event){
    $event.stopPropagation();
    console.log("clicked",$event);
  }

  onEnter(){
    console.log(this.present);
  }

}
