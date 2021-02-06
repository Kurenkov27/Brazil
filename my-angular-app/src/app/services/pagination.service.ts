import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  posts: any = [];
  page: any = 1;

  constructor() { }

  setPosts(data: any){
    this.posts = data;
  }

  getPosts(){
    return this.posts;
  }

  setPage(page: any){
    return this.page = page;
  }

  getPage(){
    return this.page
  }
}
