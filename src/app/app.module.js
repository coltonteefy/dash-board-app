"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_charts_1 = require("ng2-charts");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var second_component_1 = require("./second.component");
var linechart_component_1 = require("./linechart.component");
var barchart_component_1 = require("./barchart.component");
var work_orders_service_1 = require("./work-orders.service");
var hero_detail_component_1 = require("./hero-detail.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            ng2_charts_1.ChartsModule,
            http_1.HttpModule],
        declarations: [app_component_1.AppComponent,
            second_component_1.SecondComponent,
            linechart_component_1.LineChartDemoComponent,
            barchart_component_1.BarChartDemoComponent,
            hero_detail_component_1.HeroDetailComponent],
        providers: [work_orders_service_1.WorkOrdersService],
        bootstrap: [app_component_1.AppComponent,
            second_component_1.SecondComponent,
            linechart_component_1.LineChartDemoComponent,
            barchart_component_1.BarChartDemoComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map