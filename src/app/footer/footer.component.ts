import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import {HttpClient} from '@angular/common/http'
// import {  Headers, RequestOptions, Response } from 
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map'
 
import { FooterService } from './footer.service';
import { TaskTableService } from '../task-details/task-details.service';
import { Task } from '../task-details/task-details.model';
@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls:['./footer.component.css']
})
 
export class FooterComponent implements OnInit {
    @Output() pageChanged: EventEmitter<Task[]> = new EventEmitter();
    @Input() recordsPerPage : number;
    @Output()  IndexChanged : EventEmitter<Number> = new EventEmitter();
    
    private allItems: any[];
    pager: any = {};
    startIndex : number= 0;
    pagedItems: any[] = this.pagerService.getItems();

    constructor( private pagerService: FooterService,
        private tableService : TaskTableService) { }

    ngOnInit() {
        this.allItems = this.tableService.getDataFromLocal();     
        this.setPage(1);
        // this.pager = this.pagerService.initialPager();
        // this.pagedItems = this.pagerService.getItems();
        // this.pageChanged.emit(this.pagedItems);
    }
 
    setPage(page: number) {
        let pageSize:number = 10;
        pageSize = +this.recordsPerPage ;
        
        let len = (this.allItems == undefined ? 0 : this.allItems.length);
        this.pager = this.pagerService.getPager(len, page, pageSize);
        this.startIndex = this.pager.startIndex;
        // get current page of items
        if(this.allItems != undefined)
            this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
        this.pageChanged.emit(this.pagedItems);
        this.IndexChanged.emit(this.startIndex);
        
    }
}