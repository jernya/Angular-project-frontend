import { Task } from '../task-details/task-details.model';
import { TaskTableService } from '../task-details/task-details.service';
import { Injectable } from '@angular/core';

@Injectable()

export class FooterService {
    allItems : Task[];
    pager: any = {};
    pagedItems: any[];
    
    constructor(private tableService : TaskTableService){}

   
    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10 ) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);
 
        // ensure current page isn't out of range
        if (currentPage < 1) { 
            currentPage = 1; 
        } else if (currentPage > totalPages) { 
            currentPage = totalPages; 
        }
         
        let startPage: number, endPage: number;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
 
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
 
        // create an array of pages to ng-repeat in the pager control
        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
 
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    initialPager(){
        this.tableService.getTable();
        this.allItems = JSON.parse(localStorage.getItem('mytable'));  
        let pageSize:number = 10;
        let len = (this.allItems == undefined ? 0 : this.allItems.length);
        this.pager = this.getPager(len, 1, pageSize);
        return this.pager;
    }

    getItems(){
        this.tableService.getTable();
        this.allItems = JSON.parse(localStorage.getItem('mytable'));  
        this.pager = this.initialPager();
        if(this.allItems != undefined)
            this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
        return this.pagedItems;
    }

   
}