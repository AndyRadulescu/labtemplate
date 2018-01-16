import { Component, OnInit } from '@angular/core';
import { Grandprix } from '../../../models/grandprix';
import { ApiService } from '../../../service/api.service'

@Component({
  selector: 'app-grandprix',
  templateUrl: './grandprix.component.html',
  styleUrls: ['./grandprix.component.less']
})
export class GrandprixComponent implements OnInit {

  displayDialog: boolean;

  grandprix: Grandprix = new Grandprix();

  selectedGrandprix;
  teams;

  newGrandprix: boolean;

  grandprixes: Grandprix[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('api/grandprix').subscribe(res => {
      this.grandprixes = res;
     // console.log(this.grandprixes);
    });
  }

  onRowSelect(event) {
    this.apiService.get('api/grandprix/' + event.data.id).subscribe(res => {
      this.selectedGrandprix = res;
      this.grandprix = res;
      console.log(res);
      this.teams = res.teams;
      console.log(this.teams);
      // let teams = this.selectedGrandprix.teams;
      //console.log(this.selectedGrandprix.teams);
      this.displayDialog = true;
    });
    //console.log(event.data.id);
  }
}
