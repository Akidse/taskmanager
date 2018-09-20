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

  addStatus (status: Status): Observable<Status> {
    this.statuses.push(status);
    return new Observable((observer) => {
      observer.next(status);
      observer.complete();
    });
  }
}