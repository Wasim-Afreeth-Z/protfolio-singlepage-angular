import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-service-file',
  standalone: true,
  imports: [],
  templateUrl: './service-file.component.html',
  styleUrl: './service-file.component.scss'
})
export class ServiceFileComponent {

  ngOnInit() {
    Aos.init({ disable: 'mobile' });//AOS - 2
    Aos.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

  services: any[] = [
    {
      title: "Web Desgin",
      icon: "fa-regular fa-desktop",
      description: "Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience"
    },
    {
      title: "Web Development",
      icon: "fa-light fa-file-code",
      description: "Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services."
    },
    {
      title: "Responsive Design",
      icon: "fa-solid fa-mobile-screen-button",
      description: "Responsive design is an approach to web design that aims to make web pages of devices and screen sizes from min to max display size to ensure usability and satisfaction."
    }
  ];

}
