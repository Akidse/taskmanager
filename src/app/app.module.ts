import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule,
		     MatFormFieldModule, MatInputModule,
         MatListModule, MatDialogModule,
         MatDatepickerModule, MatNativeDateModule,
         MatSelectModule, MatTableModule,
         MatSidenavModule, MatToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './tasks/tasks.component';
import { StatusesComponent } from './statuses/statuses.component';
import { TaskDialog } from './task-dialog/task-dialog.component';
import { StatusDialog } from './status-dialog/status-dialog.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavLayoutComponent } from './nav-layout/nav-layout.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    StatusesComponent,
    TaskDialog,
    StatusDialog,
    NavLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
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
    MatTableModule,
    LayoutModule
  ],
  entryComponents: [
    TaskDialog,
    StatusDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
