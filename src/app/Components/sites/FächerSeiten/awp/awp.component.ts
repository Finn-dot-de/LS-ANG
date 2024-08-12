import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-awp',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './awp.component.html',
  styleUrls: ['./awp.component.scss']
})
export class AwpComponent {
  title = 'Programmieren lernen';
  courses = [
    'Einführung in HTML',
    'CSS für Anfänger',
    'JavaScript Grundlagen',
    'Angular Basics'
  ];
}
