import { Component, OnInit, Input } from '@angular/core';
import { Task } from  '../task-details.model'
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { TaskTableService } from '../task-details.service';
@Component({
    selector:'app-table-item',
    templateUrl:'./table-item.component.html',
    styleUrls:['./table-item.component.css']
})

export class TableItemComponent implements OnInit{
    @Input() task: Task;
    @Input() index : number;
    @Input() start : number;
    displayView = "none";
    displayEdit = "none";
    rowForm: FormGroup;
    table_edit : Task[];
    openStatus : boolean = false;
    closedStatus: boolean = false;

    constructor(private tableserv: TaskTableService){}
    ngOnInit(){
        this.initForm();
    }
    onSubmit(){
        this.tableserv.updateTable(this.index, this.rowForm.value);
        // console.log("-------------");
    }


    openViewDialog(){
        this.displayView = "block";
    }
    closeViewDialog(){
        this.displayView ="none";
    }

    openEditDialog(){
        this.displayEdit = "block";
    }
    closeEditDialog(){
        this.displayEdit ="none";
    }


    private initForm(){
        if( this.task.status== "Open" ){
            this.openStatus = true;
        } else{
            this.closedStatus = true;
        }
        let status = this.task.status;
        let quote_type = this.task.quote_type;
        let quote_num  = this.task.quote_num;
        let contact = this.task.contact;
        let task_desc =this.task.task_desc;
        let due_date = this.task.due_date;
        let task_type = this.task.task_type;
        let quote_desc = this.task.quote_desc;
        let date_arr = due_date.split(" ", 2);
        let date = new Date(date_arr[0]);
        let time = date_arr[1];

        this.rowForm = new FormGroup({
            'status': new FormControl(status, Validators.required),
            'quote_type': new FormControl(quote_type,Validators.required),
            'quote_num': new FormControl(quote_num, Validators.required),
            'contact': new FormControl(contact, Validators.required),
            'task_desc': new FormControl(task_desc, Validators.required),
            'due_date' : new FormControl(date, Validators.required),
            'Time' : new FormControl(time, Validators.required),
            'task_type': new FormControl(task_type, Validators.required),
            'quote_desc' : new FormControl(quote_desc, Validators.required)
        })
    }
}