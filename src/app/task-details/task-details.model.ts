export class Task {
    public status : string;
    public quote_type : string;
    public quote_num : number;
    public contact : string;
    public task_desc : string;
    public due_date : string;
    public task_type : string;
    public quote_desc : string;

    constructor(status:string, quote_type : string, quote_num : number,contact:string,
        task_desc:string,due_date:string,task_type:string,quote_desc:string){
        this.status = status;
        this.quote_type = quote_type;
        this.quote_num = quote_num;
        this.contact = contact;
        this.task_desc = task_desc;
        this.due_date = due_date;
        this.task_type = task_type;
        this.quote_desc =quote_desc;
    }
}