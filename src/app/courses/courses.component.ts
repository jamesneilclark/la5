import { Component, OnInit } from '@angular/core';
interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
  editMode: boolean;
}
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  studentArray: Array<IStudent> = [];
  disableAddButton = false;

  constructor() { }

  ngOnInit() {

    this.studentArray = [
      {
        id: 1,
        firstName: 'James',
        lastName: 'Clark',
        course: 'Programming',
        editMode: false
      },
      {
        id: 2,
        firstName: 'Buster',
        lastName: 'Posey',
        course: 'Catching',
        editMode: false
      },
      {
        id: 3,
        firstName: 'Sam',
        lastName: 'Bacon',
        course: 'Food',
        editMode: false
      }
    ];
  }
  addStudent() {
    this.studentArray.unshift({
      id: null,
      firstName: null,
      lastName: null,
      course: null,
      editMode: true
    });
    this.disableAddButton = true;
  }
  deleteStudent(index: number) {
    console.log('index', index);
    this.studentArray.splice(index, 1);
  }
  saveStudent() {
    this.studentArray[0].editMode = false;
    this.disableAddButton = false;
    this.sort();
  }
  sort() {
    this.studentArray.sort((a: IStudent, b: IStudent) => {
      return a.id < b.id ? -1 : 1;
    });

  }
}




