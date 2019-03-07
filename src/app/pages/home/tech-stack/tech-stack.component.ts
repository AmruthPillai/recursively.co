import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {

  techStack = [
    { path: '/assets/tech-stack/angular.png' },
    { path: '/assets/tech-stack/aws.png' },
    { path: '/assets/tech-stack/dev-ops.png' },
    { path: '/assets/tech-stack/docker.png' },
    { path: '/assets/tech-stack/flask.png' },
    { path: '/assets/tech-stack/functional-programming.png' },
    { path: '/assets/tech-stack/git.png' },
    { path: '/assets/tech-stack/heroku.png' },
    { path: '/assets/tech-stack/java.png' },
    { path: '/assets/tech-stack/mysql.png' },
    { path: '/assets/tech-stack/nodejs.png' },
    { path: '/assets/tech-stack/play-framework.png' },
    { path: '/assets/tech-stack/postgresql.png' },
    { path: '/assets/tech-stack/python.png' },
    { path: '/assets/tech-stack/react.png' },
    { path: '/assets/tech-stack/scala.png' },
    { path: '/assets/tech-stack/selenium.png' },
    { path: '/assets/tech-stack/ubuntu.png' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
