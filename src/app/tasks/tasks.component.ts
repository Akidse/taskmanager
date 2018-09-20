import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';

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
	displayedColumns: string[] = ['date', 'status', 'task'];
	statuses: Status[];
	dataSource = new MatTableDataSource<Status>();
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
			.subscribe(tasks => {this.tasks = tasks; this.dataSource.data = tasks;});
	}

	addTask (data): void {
		if(data == undefined || data.date == undefined
			|| data.status_id == undefined || data.task == undefined)return;
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