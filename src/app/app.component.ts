import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { QualificationComponent } from './qualification/qualification.component';
import { ServiceFileComponent } from './service-file/service-file.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import Aos from 'aos';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, AboutComponent, SkillComponent, QualificationComponent, ServiceFileComponent, ProjectComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio-Frontend';

  ngOnInit() {
    const toTop = document.querySelector(".top")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        toTop!.classList.add("active");
      } else {
        toTop!.classList.remove("active");
      }
    })


    Aos.init({ disable: 'mobile' });//AOS - 2
    Aos.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.


  }
}
