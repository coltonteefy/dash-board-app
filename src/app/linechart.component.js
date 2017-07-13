"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var work_orders_service_1 = require("./work-orders.service");
var LineChartDemoComponent = (function () {
    function LineChartDemoComponent(workOrdersService) {
        this.workOrdersService = workOrdersService;
        this.lineChartLabels = ['10:00AM', '10:30AM', '11:00AM', '11:30AM', '12:00PM', '1:00PM', '1:30PM'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    /**Functions **/
    LineChartDemoComponent.prototype.ngOnInit = function () {
        this.getWorkOrders();
    };
    LineChartDemoComponent.prototype.getWorkOrders = function () {
        var _this = this;
        // this.lineChartData = this.workOrdersService.getWorkOrders();
        console.log('getWorkOrders()');
        // this.workOrdersService.getWorkOrders().subscribe( (data) => {
        //   this.lineChartData = data;
        //   console.log('lineChartData: ');
        //   console.log(this.lineChartData);
        // });
        this.workOrdersService.fetchData().subscribe(function (data) {
            debugger;
            _this.lineChartData = data;
            console.log('response data: ');
            console.log(data);
            console.log('lineChartData: ');
            console.log(_this.lineChartData);
        });
    };
    LineChartDemoComponent.prototype.populateChart = function (obj) {
        console.log('populatechart');
        var workOrderData = new Array(obj.length);
        for (var i = 0; i < obj.length; i++) {
            workOrderData.push(obj[i]);
        }
        this.lineChartData = workOrderData;
    };
    LineChartDemoComponent.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    LineChartDemoComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    LineChartDemoComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return LineChartDemoComponent;
}());
LineChartDemoComponent = __decorate([
    core_1.Component({
        selector: 'line-chart-demo',
        templateUrl: './template/line-chart-demo.html'
    }),
    __metadata("design:paramtypes", [work_orders_service_1.WorkOrdersService])
], LineChartDemoComponent);
exports.LineChartDemoComponent = LineChartDemoComponent;
//# sourceMappingURL=linechart.component.js.map