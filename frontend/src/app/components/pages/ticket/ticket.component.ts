import { OnInit, Component } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { ApiService } from '../../../service/api.service';
import { SelectItem } from 'primeng/primeng';
import { User } from '../../../models/user';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.less']
})
export class TicketComponent implements OnInit {

  displayDialog: boolean;
  displayDialog2: boolean = false;
  constructor(private apiService: ApiService) { }

  ticketGpId;
  tickets: any[];
  ticket;
  selectedTicket;
  value;
  userId: string;
  grandprix;

  ngOnInit() {
  }

  buyTicketRussia() {
    console.log("russia");
    this.apiService.get('api/ticket').subscribe(res => {
      let array = [];
      for (let i = 0; i < res.length; i++) {
        if (res[i].user == null && res[i].grandprix.name == 'Russia') {
          array.push(res[i]);
        }
        this.tickets = array;
      }
      console.log(array);
    });
    this.displayDialog = true;
  }

  buyTicketChina() {
    console.log("china");
    this.apiService.get('api/ticket').subscribe(res => {
      let array = [];
      for (let i = 0; i < res.length; i++) {
        if (res[i].user == null && res[i].grandprix.name == 'China') {
          array.push(res[i]);
        }
        this.tickets = array;
      }
      console.log(array);
    });
    this.displayDialog = true;
  }

  buyTicketRomania() {
    console.log("ro");
    this.apiService.get('api/ticket').subscribe(res => {
      let array = [];
      for (let i = 0; i < res.length; i++) {
        if (res[i].user == null && res[i].grandprix.name == 'Romania') {
          array.push(res[i]);
        }
        this.tickets = array;
      }
      console.log(array);
    });
    this.displayDialog = true;
  }

  onRowSelect(event) {
    console.log(event.data);
    this.apiService.get('api/grandprix/' + event.data.grandprix_id).subscribe(res => {
      this.grandprix = res;
      console.log(this.grandprix.location);
      this.displayDialog2 = true;
      console.log(event.data.id);
    });
    this.displayDialog2 = false;
  }

  submit() {
    console.log("here is " + this.userId);
    let i = parseInt(this.userId);
    this.selectedTicket.user_id = i;
    console.log(this.selectedTicket);

    this.apiService.put('api/ticket/' + this.selectedTicket.id, this.selectedTicket).subscribe(res => {
      console.log(res);
      this.displayDialog2 = false;
      this.displayDialog = false;
    });

  }
}
