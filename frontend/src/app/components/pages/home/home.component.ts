import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { User } from '../../../models/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  data: any;
  tickets: any[];
  noBought: number = 0;
  noRemained: number = 0;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.apiService.get('api/ticket').subscribe(res => {
      this.tickets = res;
      console.log("was called");
      this.countTickets();
      this.data = {
        labels: ['No. bought tickets', 'No. of remaining tickets'],
        datasets: [
          {
            data: [this.noBought, this.noRemained],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ]
          }]
      };
    });
  }

  countTickets() {
    let nr = this.tickets.length;
    for (let i = 0; i < this.tickets.length; i++) {
      if (this.tickets[i].user_id != null) {
        this.noBought++;
      }
    }
    this.noRemained = nr - this.noBought;
    console.log(this.noRemained);
    console.log(this.noBought);
  }
}
