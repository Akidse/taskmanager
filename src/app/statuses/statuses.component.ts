import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { StatusDialog } from '../status-dialog/status-dialog.component';

import { Status } from '../status';
import { StatusesService } from '../statuses.service';

@Component({
	selector: 'app-statuses',
	templateUrl: './statuses.component.html',
	styleUrls: ['./statuses.component.css']
})
export class StatusesComponent implements OnInit {
	statuses: Status[];
	constructor(
		private dialog: MatDialog,
		private statusesService: StatusesService){

	}

	ngOnInit(){
		this.getStatuses();
	}

	getStatuses (): void {
		this.statusesService.getStatuses()
			.subscribe(statuses => this.statuses = statuses);
	}

	addStatus (data): void {
		if(data === undefined)return;
		let status = new Status(data.status);
		this.statusesService.addStatus(status)
			.subscribe(status => this.getStatuses());
	}
	openDialog(){
		const dialogConfig = new MatDialogConfig();

		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;

		const dialogRef = this.dialog.open(StatusDialog, dialogConfig);

		dialogRef.afterClosed().subscribe(
			data => this.addStatus(data)
		);
	}
}