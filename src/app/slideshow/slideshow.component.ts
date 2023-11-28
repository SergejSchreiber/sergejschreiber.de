import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss'
})
export class SlideshowComponent implements OnInit  {

  images = ['1.jpg', '2.jpg', '3.jpg'];
  headlines = [
    'Bring your pictures to the next level',
    'Landscape Photography in long-exposure',
    'Hamburger Speicherstadt'
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      },5);
    }, 8000);
  }
}
