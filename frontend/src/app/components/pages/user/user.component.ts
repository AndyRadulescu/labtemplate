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

  userDto: UserDto = new UserDto();

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
    this.userDto = new UserDto();
    this.displayDialog = true;
}

save() {
    // this.user.updatedAt =  new Date().toLocaleDateString();
    // this.user.createdAt =  new Date().toLocaleDateString();
    this.apiService.post('api/user', this.userDto).subscribe(res =>{    
        console.log(res);
       });
    this.displayDialog = false;
    this.refresh();
}

edit(){
    this.apiService.put('api/user/' + this.selectedUser.id, this.userDto).subscribe(res =>{    
        console.log(res);
    }); 
    this.displayDialog = false;
    this.refresh();
}

delete() {
    this.apiService.delete('api/user/' + this.selectedUser.id).subscribe();
    this.displayDialog = false;
    this.refresh();
}    

onRowSelect(event) {
    this.newUser = false;
    this.userDto = this.cloneUserToUserDto(this.selectedUser);
    console.log(this.userDto);
    this.displayDialog = true;
}

cloneUserToUserDto(u: User): UserDto {
    let userDto = new UserDto();
    for(let prop in userDto) {
      userDto[prop] = u[prop];
    }
    return userDto;
}

findSelectedUserIndex(): number {
    return this.users.indexOf(this.selectedUser);
}
}

export class UserDto {
    name: String;
    userName: String;
    password: String;

    constructor(name?: String, userName?: String, password?: String) {
        this.name = name;
        this.userName = userName;
        this.password = password;
    }
}

