import {Routes, RouterModule} from '@angular/router'

import { TaskDetailsComponent } from './task-details/task-details.component'
import { AddTaskComponent } from './add-task/add-task.component';

export const AppRoutes: Routes =[
    {path:'', redirectTo:'/taskdetails',pathMatch:'full'},
    {path:'taskdetails',component: TaskDetailsComponent},
    {path:'addtask', component: AddTaskComponent}  
]