import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { Task } from './task-details.model';

@Pipe({
    name: 'filter'
  })

export class FilterPipe implements PipeTransform{

    transform(items:Task[], searchText:string):any[] {
        if(!items) return [];
        if(!searchText)
            return items;
        searchText = searchText.toLowerCase();
    
        return items.filter(it =>{
            let it_str : string;
            for(let key in it){
                it_str += it[key];
            }
            return it_str.toLowerCase().includes(searchText);
        })
    
    }
}

