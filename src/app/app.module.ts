import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule,
		 MatToolbarModule, MatButtonModule,
		 MatFormFieldModule, MatInputModule,
		 MatSidenavModule, MatListModule,
     MatDialogModule, MatDatepickerModule,
     MatNativeDateModule, MatSelectModule,
     MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './tasks/tasks.component';
import { StatusesComponent } from './statuses/statuses.component';
import { TaskDialog } from './task-dialog/task-dialog.component';
import { StatusDialog } from './status-dialog/status-dialog.component';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    StatusesComponent,
    TaskDialog,
    StatusDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule
  ],
  entryComponents: [
    TaskDialog,
    StatusDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
