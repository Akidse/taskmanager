import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'
import { FormGroup, FormBuilder } from '@angular/forms';

import { Task } from '../task';
import { Status } from '../status';
@Component({
	selector: 'task-dialog',
	templateUrl: './task-dialog.component.html'
})
export class TaskDialog implements OnInit {
	statuses: Status[];
	form: FormGroup;
	task: Task;
	date: Date;

	constructor(
		private fb: FormBuilder,
		private dialogRef: MatDialogRef<TaskDialog>,
		@Inject(MAT_DIALOG_DATA) public data: any){
		this.statuses = data.statuses;

		this.task = new Task();
		this.task.task = '';
		this.task.date = new Date();
		this.task.status_id = 0;
	}

	ngOnInit() {
		this.form = this.fb.group({
			task: [this.task.task, []],
			date: [this.task.date, []],
			status_id: [this.task.status_id, []]
		});
	}

	close() {
	    this.dialogRef.close();
	}
	
	save() {
		this.dialogRef.close(this.form.value);
	}
}