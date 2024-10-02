import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrl: './lecture.component.css'
})
export class LectureComponent {

  userObj = {
    name: "dima",
    age: 22,
    color: "yellow"

  };
  usersArray = [{
    name: "dima",
    grade: 22,
    food: "yellow"

  }, {
      name: "yosef",
      grade: 15,
      food: "yellow"

    },
    {
      name: "noor",
      grade: 17,
      food: "yellow"

    }

  ]
  display = true;
  color = "red";
  name: string = "dima";
  num: any;
  urlImg: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnuRaF10nJF2Rj1UVdJNK8_aRjLc4R0JhlQ&s";
  onchange() {
    this.name = "Lujain"
  };
}
