import {OnInit,Component} from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { ApiService } from '../../../service/api.service';


@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.less']
  })
export class TicketComponent implements OnInit {
  
    displayDialog: boolean;

    ticket: Ticket = new Ticket();
    
    selectedTicket: Ticket;
    
    newTicket: boolean;
  
    tickets: Ticket[];
  
    constructor(private apiService: ApiService ,){
         console.log('constructor ran..')}

  ngOnInit() {
      console.log('ngOnInit ran...')
    this.apiService.get('api/user').subscribe(res =>{    
        this.ticket = res;
        console.log(this.ticket[0].price);
    });
  }
}


