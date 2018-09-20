import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { TaskDialog } from '../task-dialog/task-dialog.component';

import { Status } from '../status';
import { Task } from '../task';

import { StatusesService } from '../statuses.service';
import { TasksService } from '../tasks.service';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
	statuses: Status[];
	tasks: Task[];
	constructor(
		private dialog: MatDialog,
		private statusesService: StatusesService,
		private tasksService: TasksService){

	}

	ngOnInit(){
		this.getStatuses();
		this.getTasks();
	}

	getStatuses (): void{
		this.statusesService.getStatuses()
			.subscribe(statuses => this.statuses = statuses);
	}

	getTasks (): void{
		this.tasksService.getTasks()
			.subscribe(tasks => this.tasks = tasks);
	}

	addTask (data): void {
		let task = new Task();
		task.date = data.date;
		task.status_id = data.status_id;
		task.task = data.task;
		this.tasksService.addTask(task)
			.subscribe(task => this.getTasks());
	}
	openDialog(){
		const dialogConfig = new MatDialogConfig();

		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;

		dialogConfig.data = {statuses: this.statuses};

		const dialogRef = this.dialog.open(TaskDialog, dialogConfig);

		dialogRef.afterClosed().subscribe(
			data => this.addTask(data)
		);
	}

	getStatusName (statusId): string {
		return this.statuses[statusId].status;
	}
}