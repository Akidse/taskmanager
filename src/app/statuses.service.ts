import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Status } from './status';

@Injectable({
  providedIn: 'root'
})
export class StatusesService {
  private statuses: Status[] = [new Status('Status 1'), new Status('Status 2')];

  constructor() {
  }

  getStatuses (): Observable<Status[]> {
  	return new Observable((observer) => {
      observer.next(this.statuses);
      observer.complete();
    });
  }

  getStatus (id:string): Observable<Status> {
    return new Observable((observer) => {
      for(var i = 0; i < this.statuses.length; i++)
      {
        observer.next(this.statuses[i]);
      }
      observer.complete();
    });
  }

  putStatus (status: Status): Observable<Status> {
    return new Observable((observer) => {
      for(var i = 0; i < this.statuses.length; i++)
      {
        observer.next(this.statuses[i]);
      }
      observer.complete();
    });
  }

  addStatus (status: Status): Observable<Status> {
    this.statuses.push(status);
    return new Observable((observer) => {
      observer.next(status);
      observer.complete();
    });
  }

  removeStatus (statusId: String) {
    return new Observable((observer) => {
      for(var i = 0; i < this.statuses.length; i++)
      {
        observer.next(this.statuses[i]);
      }
      observer.complete();
    });
  }
}