import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ngOnInit() {
    Aos.init({ disable: 'mobile' });//AOS - 2
    Aos.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

  softskills: any[] = [
    {
      skillname: "Critical thinking",
      icon: "fa fa-gear fa-spin",
      description: "Critical thinking enables individuals to approach problems and challenges with a strategic and analytical mindset."
    },
    {
      skillname: "Problem-solving",
      icon: "fa fa-suitcase",
      description: "Problem-solving involves the ability to come up with alternative solutions. This skill is crucial to identifying and addressing complex challenges."
    },
    {
      skillname: "Creativity",
      icon: "fa-light fa-gem",
      description: "Creativity involves the ability to think outside the box and come up with ideas that challenge assumptions. "
    }
  ];

}
