import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { Task } from './task-details.model';

@Pipe({
    name: 'sorting'
  })

export class SortingPipe implements PipeTransform{

    transform(table: Task[], path: string[], order:number = 1): Task[] {
      if(!table || !path || !order)
        return table;

      return table.sort((a: Task, b: Task) => {
        let c :any;
        let d : any;
        path.forEach(property => { 
          if(property =='Contact Name'){
            c = a.contact;
            d = b.contact;
          } else if (property== "Quote Type"){
            c = a.quote_type;
            d = b.quote_type;
          } else if (property = "Quote#"){
            c = +a.quote_num;
            d = +b.quote_num;
          } else if ( property == "Due Date"){
            c = a.contact;
            d = b.due_date;
          }

        })
        return c > d ? order : order * (-1);
      })
    
      }
}