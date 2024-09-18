import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  ngOnInit() {
    Aos.init({ disable: 'mobile' });//AOS - 2
    Aos.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

}
