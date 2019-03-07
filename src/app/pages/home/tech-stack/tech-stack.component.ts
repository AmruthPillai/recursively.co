import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {

  techStack = [
    { path: '/assets/tech-stack/angular.svg' },
    { path: '/assets/tech-stack/react.svg' },
    { path: '/assets/tech-stack/docker.svg' },
    { path: '/assets/tech-stack/play-framework.svg' },
    { path: '/assets/tech-stack/java.svg' },
    { path: '/assets/tech-stack/flask.svg' },
    { path: '/assets/tech-stack/mysql.svg' },
    { path: '/assets/tech-stack/postgresql.svg' },
    { path: '/assets/tech-stack/docker.svg' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
