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
    console.log("slaut");
    this.apiService.get('api/ticket').subscribe(res => {
      this.ticketGpId = res;
      let nr = this.ticketGpId.length;
      let j = 0;
      for(let i=0;i<nr;i++){
        console.log("this id"+this.ticketGpId[i].grandprix_id);
        if(this.ticketGpId[i].grandprix_id == 2){
          this.tickets[j++] = this.ticketGpId[i];
        }
      }
      console.log("tickets length"+nr);
    
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
  ngModel() {
    console.log("ceva");
  }
  onRowSelect(event) {
    this.apiService.get('api/grandprix/' + event.data.id).subscribe(res => {
      this.grandprix = res;
      console.log(this.grandprix.location);
      this.displayDialog2 = true;
      console.log(event.data.id);
    });

  }

  submit() {
    console.log("here is " + this.userId);
    let i = parseInt(this.userId);
    this.selectedTicket.user_id = i;
    console.log(this.selectedTicket);

    this.apiService.put('api/ticket/' + this.selectedTicket.id, this.selectedTicket).subscribe(res => {
      console.log(res);
      this.displayDialog2 = false;
    });

  }
}
