import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [];

  constructor() {
  }

  getTasks (): Observable<Task[]> {
    return new Observable((observer) => {
      observer.next(this.tasks);
      observer.complete();
    });
  }

  addTask (task: Task): Observable<Task> {
    this.tasks.push(task);
    return new Observable((observer) => {
      observer.next(task);
      observer.complete();
    });
  }
  
}