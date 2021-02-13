import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.css']
})
export class GirlsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  itemsList = [
    {title: "Title 1", description: "Some text 1", img: "image1"},
    {title: "Title 2", description: "Some text 2", img: "image2"},
    {title: "Title 3", description: "Some text 3", img: "image3"},
    {title: "Title 4", description: "Some text 4", img: "image4"},
    {title: "Title 5", description: "Some text 5", img: "image5"},
    {title: "Title 6", description: "Some text 6", img: "image6"},
    {title: "Title 7", description: "Some text 7", img: "image9"},
    {title: "Title 8", description: "Some text 8", img: "image9"},
    {title: "Title 9", description: "Some text 9", img: "image9"},
    {title: "Title 10", description: "Some text 10", img: "image9"},
    {title: "Title 11", description: "Some text 11", img: "image9"},
    {title: "Title 1", description: "Some text 1", img: "image1"},
    {title: "Title 2", description: "Some text 2", img: "image2"},
    {title: "Title 3", description: "Some text 3", img: "image3"},
    {title: "Title 4", description: "Some text 4", img: "image4"},
    {title: "Title 5", description: "Some text 5", img: "image5"},
    {title: "Title 6", description: "Some text 6", img: "image6"},
    {title: "Title 7", description: "Some text 7", img: "image9"},
    {title: "Title 8", description: "Some text 8", img: "image9"},
    {title: "Title 9", description: "Some text 9", img: "image9"},
    {title: "Title 10", description: "Some text 10", img: "image9"},
    {title: "Title 9", description: "Some text 9", img: "image9"},
    {title: "Title 10", description: "Some text 10", img: "image9"},
    {title: "Title 11", description: "Some text 11", img: "image9"},
    {title: "Title 1", description: "Some text 1", img: "image1"},
    {title: "Title 2", description: "Some text 2", img: "image2"},
    {title: "Title 3", description: "Some text 3", img: "image3"},
    {title: "Title 4", description: "Some text 4", img: "image4"},
    {title: "Title 5", description: "Some text 5", img: "image5"},
    {title: "Title 6", description: "Some text 6", img: "image6"},
    {title: "Title 7", description: "Some text 7", img: "image9"},
    {title: "Title 8", description: "Some text 8", img: "image9"},
    {title: "Title 9", description: "Some text 9", img: "image9"},
    {title: "Title 10", description: "Some text 10", img: "image9"},
  ]
  p: number = 1;
  collection: any[] = this.itemsList; 

}
