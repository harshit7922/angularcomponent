import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgIf, NgClass, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  standalone: true, // Ensure this is a standalone component
  imports: [NgIf,NgClass,NgSwitch,  NgSwitchCase, NgSwitchDefault] // Add NgIf to imports
})
export class CourseCardComponent implements OnInit {
@Input({required: true})
course: Course;

@Input({required: true})
index: number;

@Input({required: true})
cardIndex: number;


@Output()
couseSelected = new EventEmitter<Course>();
  constructor() { }
  ngOnInit(): void {
  }

  onCourseCardButtonClick() {
    console.log('Course card button clicked!');
    this.couseSelected.emit(this.course);
  }

  isImageVisible(): boolean {
    return (this.course && this.course.iconUrl) ? true : false;
  }

  cardClasses(){
    return {
      'beginner': this.course.category == 'BEGINNER',
      'course-card': true
    }
  }
}
