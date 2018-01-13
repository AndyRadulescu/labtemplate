import { Component, OnInit } from '@angular/core';
import {Ticket} from '../../../models/ticket';
import { MessageService } from 'primeng/components/common/messageservice';
import {ApiService} from '../../../service/api.service'

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.less']
})
export class TicketComponent implements OnInit {

  displayDialog: boolean;

  ticket: Ticket = new Ticket();
  
  selectedUser: TicketComponent;
  
  newUser: boolean;

  tickets: TicketComponent[];

  constructor(private apiService: ApiService ) { 
   
  }

  ngOnInit() {
     console.log(this.ticket[0].id);
  }
}
