import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { User } from '../../../models/user';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.less']
})

export class CommentComponent implements OnInit {

    displayDialog: boolean = true;
    displayDialog2: boolean = false;
    userId: number;

    selectedComment;
    commentBody;

    comments: any[];

    constructor(private apiService: ApiService) {

    }

    ngOnInit() {
    }


    find() {
        this.apiService.get('api/user/' + this.userId).subscribe(res => {
            this.comments = res.comments;
            console.log("was called");
            this.displayDialog = false;
        });
    }

    openCommentDialog() {

        this.displayDialog2 = true;
    }

    addComment() {
        this.apiService.post('api/comment', {
            body: this.commentBody,
            user_id: this.userId
        }).subscribe(res => {
            this.find();
            this.displayDialog2 = false;
        });
    }

}