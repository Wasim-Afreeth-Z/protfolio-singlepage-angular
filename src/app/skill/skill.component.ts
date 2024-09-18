import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {

  ngOnInit() {
    Aos.init({ disable: 'mobile' });//AOS - 2
    Aos.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

  technicalskills: any[] = [
    {
      skillname: "HTML",
      skillimage: "images/skill/html.svg"
    },
    {
      skillname: "CSS",
      skillimage: "images/skill/css.svg"
    },
    {
      skillname: "Tailwind",
      skillimage: "images/skill/tailwind-css.svg"
    },
    {
      skillname: "JS",
      skillimage: "images/skill/javascript.svg"
    },
    {
      skillname: "Angular",
      skillimage: "images/skill/angular.svg"
    },
    {
      skillname: "NodeJS",
      skillimage: "images/skill/node-js.svg"
    },
    {
      skillname: "ExpressJS",
      skillimage: "images/skill/express-js.svg"
    },
    {
      skillname: "MySQL",
      skillimage: "images/skill/mysql.svg"
    },
    {
      skillname: "MongoDB",
      skillimage: "images/skill/mongodb.svg"
    },
  ];

}
