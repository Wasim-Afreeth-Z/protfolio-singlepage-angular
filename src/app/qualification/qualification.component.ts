import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-qualification',
  standalone: true,
  imports: [],
  templateUrl: './qualification.component.html',
  styleUrl: './qualification.component.scss'
})
export class QualificationComponent {

  ngOnInit() {
    Aos.init({ disable: 'mobile' });//AOS - 2
    Aos.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

  educations: any[] = [
    {
      degreeORcourse: "MSc Computer Science",
      institution: "Pondicherry University ",
      year: "2021-2023",
      cgpa: "7.65",
      percentage: 76
    },
    {
      degreeORcourse: "BSc Computer Science",
      institution: "E.G.S. Pillay Arts and Science College, Nagapattinam",
      year: "2018-2021",
      cgpa: "8.03",
      percentage: 80
    },
    {
      degreeORcourse: "Grade 12  - Computer Science",
      institution: "SRVS National Higher Secondary School, Karaikal",
      year: "2017-2018",
      cgpa: "6",
      percentage: 60
    }
  ];

}
