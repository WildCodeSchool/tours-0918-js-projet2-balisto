import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  images: string[];

  constructor() { }

  ngOnInit() {
    this.images = [1, 2, 3].map(() => `https://picsum.photos/1600/500?random&t=${Math.random()}`);
  }


}
