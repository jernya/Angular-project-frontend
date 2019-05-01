import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableItemComponent } from './task-details/table-item/table-item.component';
import { TaskDetailsComponent } from './task-details/task-details.component'
import { AddTaskComponent } from './add-task/add-task.component';
import { AppRoutes } from './app-routing.module';
import { FilterPipe } from './task-details/filter.pipe';
import { SortingPipe } from './task-details/sort.pipe';
import { TaskTableService } from './task-details/task-details.service';
import { FooterService} from './footer/footer.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableItemComponent,
    TaskDetailsComponent,
    AddTaskComponent,
    FilterPipe,
    SortingPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    BsDatepickerModule.forRoot(),
    // TimepickerModule.forRoot()
  ],
  providers: [TaskTableService, FooterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
