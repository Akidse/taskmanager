import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
	selector: 'status-dialog',
	templateUrl: './status-dialog.component.html'
})
export class StatusDialog implements OnInit {

	form: FormGroup;
	status: string;
	constructor(
		private fb: FormBuilder,
		private dialogRef: MatDialogRef<StatusDialog>,
		@Inject(MAT_DIALOG_DATA) public data: any){

		this.status = '';
	}

	ngOnInit() {
		this.form = this.fb.group({
			status: [status, []]
		});
	}
	close() {
	    this.dialogRef.close();
	}
	save() {
		this.dialogRef.close(this.form.value);
	}
}