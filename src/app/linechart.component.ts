import { Component, OnInit } from '@angular/core';
import { WorkOrdersService } from './work-orders.service';
import { WorkOrder }         from './workOrder';
import { BARCHARTDATA } from './mock-work-orders';



@Component({
  selector: 'line-chart-demo',
  templateUrl: './template/line-chart-demo.html'
})

export class LineChartDemoComponent implements OnInit {
  // lineChart
  public lineChartData: Array<WorkOrder>;

  public lineChartLabels: Array<any> = ['10:00AM', '10:30AM', '11:00AM', '11:30AM', '12:00PM', '1:00PM', '1:30PM'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  constructor( private workOrdersService: WorkOrdersService ) { }



  /**Functions **/
  ngOnInit(): void {
    this.getWorkOrders();
  }

  getWorkOrders(): void {
    // this.lineChartData = this.workOrdersService.getWorkOrders();
    console.log('getWorkOrders()');
    // this.workOrdersService.getWorkOrders().subscribe( (data) => {
    //   this.lineChartData = data;
    //   console.log('lineChartData: ');
    //   console.log(this.lineChartData);
    // });
    this.workOrdersService.fetchData().subscribe( (data) => {
      debugger;
      this.lineChartData = data;
      console.log('response data: ');
      console.log(data);
      console.log('lineChartData: ');
      console.log(this.lineChartData);
    });
  }

  public populateChart(obj: any[]): void {
    console.log('populatechart');
    let workOrderData: Array<WorkOrder> = new Array(obj.length);
    for (let i = 0; i < obj.length; i++) {
      workOrderData.push(obj[i]);
    }
    this.lineChartData = workOrderData;
  }

  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
