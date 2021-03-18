import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredTitle = "";
  enteredContent = "";
  post: any;
  private mode = "create";
  private postId: any;
  isLoading = false;


  constructor(public PostsService: PostsService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('postId')){
        this.mode = "edit";
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.PostsService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
          this.post = {id: postData._id, title: postData.title, content: postData.content}
        })
      } else{
        this.mode = "create";
        this.postId = undefined;
      }
    })
  }

  onSavePost(form: NgForm){
    if (form.invalid) return
    this.isLoading = true;
    if (this.mode === "create") {
      this.PostsService.addPost(form.value.title, form.value.content)
    } else if (this.mode === "edit"){
      this.PostsService.updatePost(
        this.postId,
        form.value.title,
        form.value.content
      )
    }

    form.resetForm();
    this.router.navigate(['/blog']);
  }

}
