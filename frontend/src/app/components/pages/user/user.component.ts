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
     console.log(this.users[0].id);
    });
  }

  showDialogToAdd() {
    this.newUser = true;
    this.user = new User();
    this.displayDialog = true;
}

save() {
    let users = [...this.users];
    if(this.newUser)
        users.push(this.user);
    else
        users[this.findSelectedUserIndex()] = this.user;
    
    this.users = users;
    this.user = null;
    this.displayDialog = false;
}

delete() {
    let index = this.findSelectedUserIndex();
    this.users = this.users.filter((val,i) => i!=index);
    this.user = null;
    this.displayDialog = false;
}    

onRowSelect(event) {
    this.newUser = false;
    this.user = this.cloneUser(event.data);
    this.displayDialog = true;
}

cloneUser(u: User): User {
    let user = new User();
    for(let prop in user) {
      user[prop] = user[prop];
    }
    return user;
}

findSelectedUserIndex(): number {
    return this.users.indexOf(this.selectedUser);
}
}

