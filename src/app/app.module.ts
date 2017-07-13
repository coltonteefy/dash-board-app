import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule }  from 'ng2-charts';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { SecondComponent } from './second.component';
import { LineChartDemoComponent } from './linechart.component';
import { BarChartDemoComponent }  from './barchart.component';
import { WorkOrdersService }      from './work-orders.service';


import { HeroDetailComponent }    from './hero-detail.component';


@NgModule({
  imports:      [ BrowserModule,
                  ChartsModule,
                  HttpModule],
  declarations: [ AppComponent ,
                  SecondComponent,
                  LineChartDemoComponent,
                  BarChartDemoComponent,
                  HeroDetailComponent ],
  providers:    [ WorkOrdersService ],
  bootstrap:    [ AppComponent ,
                  SecondComponent,
                  LineChartDemoComponent,
                  BarChartDemoComponent ]
})
export class AppModule { }
