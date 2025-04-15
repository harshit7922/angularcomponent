import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
   

    @ViewChildren(CourseCardComponent)
    cards: QueryList<CourseCardComponent>;

    @ViewChild('cardRef1')
    card1: CourseCardComponent;
    onCardClick(course:Course) {
        console.log('Card clicked!', this.cards.first);
        console.log('Card clicked!', this.cards.last);
        console.log('Card clicked!', this.cards.toArray());
        console.log('Card clicked!', this.cards.length);
        console.log('Card clicked!', this.card1);
    }

    trackCourse(index: number, course: Course) {
        return course.id;
    }
}
