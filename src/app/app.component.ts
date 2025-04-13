import { Component } from '@angular/core';
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

    coreCourses = COURSES[0];
    rxJSCourse =  COURSES[1];
    ngrxCourse =  COURSES[2];
    angularCourse =  COURSES[3];
    securityCourse =  COURSES[4];
    pwaCourse =  COURSES[5];
    advancedCourse =  COURSES[6];
    onCardClick(course:Course) {
        console.log('Card clicked!', course);
    }
}
