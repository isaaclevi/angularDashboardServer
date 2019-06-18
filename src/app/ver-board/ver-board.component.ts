import { UserDataSource } from '../user/UserDataClass';
import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ver-board',
  templateUrl: './ver-board.component.html',
  styleUrls: ['./ver-board.component.css']
})
export class VerBoardComponent implements OnInit {
  private dataSource = new UserDataSource(this.api);
  //public ChartLabels = ['update','outdate'];
  //public ChartData = [100,150];
  //public doughnutChartType = 'doughnut';
  //public ChartOptions = { responsive: true, };
  private ver:string;
  private canv;
  private chart;
  private users:any;
  private arr:string[];
  //@Output('newPresent') change = new EventEmitter; 
  

  constructor(private api: ApiService) { }

  async ngOnInit() {
    this.users = await this.initUsers();
    this.canv = (<HTMLCanvasElement>document.getElementById("doug")).getContext('2d');
    this.chart = this.initChart();
    console.log(this.users);
  }

  async initUsers(){
    return this.api.getUsers().subscribe(res => {
      console.log(res);
      return res;
    }, err => {
      console.log(err);
    });
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

  calc(){
    /*
    this.arr.push(this.users[0].db_ver)
    for(var i=0;i<this.users.length;i++){
      this.users[i].db_ver == 
    }*/
  }

  onEnter(){
    console.log(this.ver);
  }

}
