import {Component, OnInit, OnDestroy} from '@angular/core';
import {Post} from "../../shared/models/post.model";
import {PostsService} from "../../shared/services/posts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'team-members',
    providers: [PostsService],
    templateUrl: './post-detail.template.pug'
})

export class FrontPostDetail implements OnInit, OnDestroy{
    post:Post;
    sub:any;

    constructor(private _service:PostsService, private _route:ActivatedRoute) {
        this.post = new Post();
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
           this.getPost(params['id']);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }

    getPost(id:number){
        this._service.get(id).then(res => this.post = res);
    }



}