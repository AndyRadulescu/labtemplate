import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import {User} from '../../../models/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  user: number;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('api/user/2').subscribe(res => {
      this.user = res.name;
     
      //this.user = res.data;
      console.log(res.name);
    });
  }

}
