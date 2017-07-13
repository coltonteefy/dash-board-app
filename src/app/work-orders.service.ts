import { Injectable } from '@angular/core';
import { WorkOrder }   from './workOrder';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { BARCHARTDATA } from './mock-work-orders';
import {Observer} from 'rxjs/Observer';


@Injectable()
export class WorkOrdersService {

  // private workOrdersUrl = 'mock-work-orders.json';  // URL to web API

  constructor (private http: Http) {}


  getWorkOrders(): Observable<Array<WorkOrder>> {
    return Observable.create(function(observer: Observer<Array<WorkOrder>>) {
      observer.next(BARCHARTDATA);
    });
  }

  fetchData(): Observable<Array<WorkOrder>> {
    return this.http.get('app/mock-work-orders.json')
    // map this observable response to another observable
    // so that you can get the right format you need in order to output.
    // (response) => response.json().data as WorkOrder[]
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log('extractData() :');
    console.log(body.data);
    return body.data || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }



}
