import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { StatusesComponent } from './statuses/statuses.component';

const appRoutes: Routes = [
	{path: '', redirectTo: '/tasks', pathMatch: 'full'},
	{path: 'tasks', component: TasksComponent},
	{path: 'statuses', component: StatusesComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule{ }