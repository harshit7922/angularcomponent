import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {
@Input({required: true})
course: Course;

  constructor() { }
  ngOnInit(): void {
  }

  onCourseCardButtonClick() {
    console.log('Course card button clicked!');
  }
}
