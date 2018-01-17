import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import {User} from '../../../models/user';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.less']
  })

  export class CommentComponent implements OnInit{

    displayDialog: boolean = true;

    userId: number;

    selectedComment;
    
    comments: any[];

    constructor(private apiService: ApiService) {

    }

    ngOnInit() {
    }


    find() {
        this.apiService.get('api/user/' + this.userId).subscribe(res => {
            this.comments = res.comments;
            console.log("was called");
        });
        this.displayDialog = false;
    }

}