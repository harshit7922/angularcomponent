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

    courses = [...COURSES]; //COURSES; // [] //empty array for @empty example
   

    @ViewChild(CourseCardComponent)
    card: CourseCardComponent;
    onCardClick(course:Course) {
        console.log('Card clicked!', this.card);
    }

    trackCourse(index: number, course: Course) {
        return course.id;
    }
}
