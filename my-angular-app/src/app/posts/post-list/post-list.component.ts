import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model'
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  isLoading = false;
  private postsSub: Subscription = new Subscription;

  constructor(public PostsService: PostsService) {}

  ngOnInit(): void {
    this.PostsService.getPosts();
    this.isLoading = true;
    this.postsSub = this.PostsService.getpostsUpdatedListener()
    .subscribe((posts: Post[]) => {
      this.isLoading = false;
      this.posts = posts;
    });
  }

  onDelete(postId: string){
    this.PostsService.deletePost(postId)
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }


}
