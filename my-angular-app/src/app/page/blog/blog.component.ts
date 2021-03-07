import { Component, OnInit } from '@angular/core';

import { Post } from '../../posts/post.model'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  storedPosts: Post[] = []

  onPostAdded(post: any){
    this.storedPosts.push(post)
  }
}

//module.exports = BlogComponent
export default BlogComponent
