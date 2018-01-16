import { OnInit, Component } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { ApiService } from '../../../service/api.service';
import {SelectItem} from 'primeng/primeng';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.less']
})
export class TicketComponent implements OnInit {

  displayDialog: boolean;
  constructor(private apiService: ApiService) { }

  tickets;
  ticket;
  selectedTicket;
  value;

  ngOnInit() {
  }

  buyTicketRussia() {
    console.log("slaut");
    this.apiService.get('api/ticket').subscribe(res => {
      this.tickets = res;
      console.log(res);
      this.displayDialog = true;
    });
    this.displayDialog = true;
  }

  buyTicketChina() {
    console.log("slaut");
    this.apiService.get('api/ticket').subscribe(res => {
      this.tickets = res;
      console.log(res);
      this.displayDialog = true;
    });
    this.displayDialog = true;
  }
  buyTicketRomania() {
    console.log("slaut");
    this.apiService.get('api/ticket').subscribe(res => {
      this.tickets = res;
      console.log(res);
      this.displayDialog = true;
    });
    this.displayDialog = true;;
  }
  ngModel(){
    console.log("ceva");
  }

}


