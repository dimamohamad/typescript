import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrl: './lecture.component.css'
})
export class LectureComponent {
  name: string = "dima";
  num: any;
  urlImg: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnuRaF10nJF2Rj1UVdJNK8_aRjLc4R0JhlQ&s";
  onchange() {
    this.name = "Lujain"
  };
}
