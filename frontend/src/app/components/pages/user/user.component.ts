import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user';
import { MessageService } from 'primeng/components/common/messageservice';
import {ApiService} from '../../../service/api.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  displayDialog: boolean;

  user: User = new User();
  
  selectedUser: User;
  
  newUser: boolean;

  users: User[];

  constructor(private apiService: ApiService ) { 
   
  }

  ngOnInit() {
     this.apiService.get('api/user').subscribe(res =>{    
     this.users = res;
     console.log(this.users)
    });
  }
}
