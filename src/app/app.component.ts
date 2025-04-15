import { Component, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

    courses = COURSES; // [] //empty array for @empty example
   

    @ViewChild('cardRef')
    card: CourseCardComponent;

    @ViewChild('cardRef1')
    card1: CourseCardComponent;
    onCardClick(course:Course) {
        console.log('Card clicked!', this.card);
        console.log('Card clicked!', this.card1);
    }

    trackCourse(index: number, course: Course) {
        return course.id;
    }
}
