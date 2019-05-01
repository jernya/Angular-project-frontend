import { Component, OnInit } from '@angular/core';
import { Task } from './task-details.model';
import { TaskTableService } from './task-details.service';



@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.css']
})


export  class TaskDetailsComponent implements OnInit{
    task_details : Task[];
    startIndex : number;
    selectedRecordsOption: number = 10;
    selectedOrderOption : string ;
    selectedDecending;
    searchText = '';
    path: string[] = [];
    order : number = 1;
    recordsOptions = [
        {name: "10" },
        {name : "20" },
        {name : "50" },
        {name : "100" }
      ]
      orderOptions = [
        {name : "Contact Name"},
        {name : "Quote Type"},
        {name : "Quote#"},
        {name : "Due Date"}
      ]

    constructor(private tableService :TaskTableService){}

    ngOnInit(){
        this.task_details = this.tableService.getDataFromLocal();     
    }

    pageChangedHandler(pageditems : Task[] ){
        this.task_details = pageditems;  
    }
    indexChangedHandler(index : number){    
        this.startIndex = index;
    }

    getCurrentRecords(event){
        this.selectedRecordsOption = event;
    }
    getCurrentOrder(event){
        this.selectedOrderOption = event;
        this.path = this.sortTable(this.selectedOrderOption);
    }

    getCurrentDescending(event){
        // console.log(this.selectedDecending);
        this.descendingTable(this.selectedDecending);
    }
    
    descendingTable(prop:string){
        this.order = 1;
        if(prop){
            this.order *= (-1);
        } else {
            this.order *= 1;
        }
    }

    sortTable(prop: string) {
        this.path= [];
        this.path.push(prop);
        return this.path;
      }
 
   
    
} 