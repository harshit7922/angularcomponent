import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {
@Input({required: true})
course: Course;

@Output()
couseSelected = new EventEmitter<Course>();
  constructor() { }
  ngOnInit(): void {
  }

  onCourseCardButtonClick() {
    console.log('Course card button clicked!');
    this.couseSelected.emit(this.course);
  }
}
