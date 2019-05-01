import { Component , OnInit} from '@angular/core'
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Task } from '../task-details/task-details.model';

import { TaskTableService } from '../task-details/task-details.service';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
    TaskForm: FormGroup;
    row : Task; 
    constructor(private tableserv: TaskTableService){}

    ngOnInit(){
        this.initForm();
    }
    onSubmit(){
        console.log(this.TaskForm.value);
        console.log('00000000000000000');
        console.log(this.TaskForm.value);
        this.tableserv.addTask(this.TaskForm.value);
    }

    private initForm(){
    
        let status = "";
        let quote_type = "";
        let quote_num  = "";
        let contact = "";
        let task_desc = "";
        let due_date = "";
        let task_type = "";
        let quote_desc = "";
        let date_arr = due_date.split(" ", 2);
        let date = new Date(date_arr[0]);
        let time = date_arr[1];

        this.TaskForm = new FormGroup({
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

        // this.TaskForm = new FormGroup({
        //     'Status': new FormControl(status, Validators.required),
        //     'Quote Type': new FormControl(quote_type,Validators.required),
        //     'Quote#': new FormControl(quote_num, Validators.required),
        //     'Contact': new FormControl(contact, Validators.required),
        //     'Task': new FormControl(task_desc, Validators.required),
        //     'Date' : new FormControl(date, Validators.required),
        //     'Time' : new FormControl(time, Validators.required),
        //     'Task Type': new FormControl(task_type, Validators.required),
        //     'Quote' : new FormControl(quotw_desc, Validators.required)
        // })

    }


    
}