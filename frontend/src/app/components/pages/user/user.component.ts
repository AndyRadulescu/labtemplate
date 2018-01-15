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
    this.refresh();
  }

  refresh(){
    this.apiService.get('api/user').subscribe(res =>{    
        this.users = res;
        console.log("was called");
       });
  }

  showDialogToAdd() {
    this.newUser = true;
    this.user = new User();  
    this.displayDialog = true;
}

save() {
    // this.user.updatedAt =  new Date().toLocaleDateString();
    // this.user.createdAt =  new Date().toLocaleDateString();
    this.apiService.post('api/user', this.user).subscribe(res =>{    
        console.log(res);
       });
       this.user = new User(); 
    this.displayDialog = false;
    this.ngOnInit();
}

edit(){
    this.apiService.put('api/user/' + this.selectedUser.id, this.user).subscribe(res =>{    
        console.log(res);
    }); 
    this.user = new User(); 
    this.displayDialog = false;
    this.ngOnInit();
}

delete() {
    this.apiService.delete('api/user/' + this.selectedUser.id).subscribe();
    this.user = new User(); 
    this.displayDialog = false;
    this.ngOnInit();
}    

onRowSelect(event) {
    this.newUser = false;
    this.user = this.cloneUser(this.selectedUser);
    this.displayDialog = true;
}

cloneUser(u: User): User {
    let user = new User();
    for(let prop in u) {
      user[prop] = u[prop];
    }
    return user;
}

findSelectedUserIndex(): number {
    return this.users.indexOf(this.selectedUser);
}
}

