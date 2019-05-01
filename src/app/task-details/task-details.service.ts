import {Injectable } from '@angular/core';
import {Task} from './task-details.model';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http'

// import { Observable } from "rxjs/Observable"
import { CompileTemplateMetadata } from '../../../node_modules/@angular/compiler';

@Injectable()

export class TaskTableService {
    tableChanged = new Subject<Task[]>();
    constructor(private httpserv:HttpClient){}
    table_arr: Task [];
 
    getTable(){
      // localStorage.clear();
      if(localStorage.getItem('mytable') == undefined){
        this.httpserv.get('../../assets/table-data.json').subscribe(
          data =>{
            this.table_arr = data as Task [];
            localStorage.setItem('mytable', JSON.stringify(this.table_arr));
            // return this.table_arr;
          }
        )
      }else {
        this.table_arr =  JSON.parse(localStorage.getItem('mytable'));
      }
      
        // return this.table_arr;
      
    }
    getRow(index:number){
      return this.table_arr[index];
    }

    updateTable(index:number, updatedRow:Task){
      this.table_arr[index] = updatedRow; 
      localStorage.setItem('mytable', JSON.stringify(this.table_arr));
      // location.reload();
    }

    addTask(newTask : Task){
      this.table_arr = JSON.parse(localStorage.getItem('mytable'));
      this.table_arr.push(newTask);
      localStorage.setItem('mytable', JSON.stringify(this.table_arr));
    }

    getDataFromLocal(){
      this.getTable();
      this.table_arr = JSON.parse(localStorage.getItem('mytable'));
      return this.table_arr;
    }

 




}