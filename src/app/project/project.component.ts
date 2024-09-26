import { Component, inject } from '@angular/core';
import Aos from 'aos';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewProjectComponent } from '../view-project/view-project.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  // inject
  route = inject(Router)
  dialog = inject(MatDialog)

  ngOnInit() {
    Aos.init({ disable: 'mobile' });//AOS - 2
    Aos.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }


  projects: any[] = [
    {
      title: "E-commerce Website",
      image: "/images/projects/ECommerce-Website.png",
      sub_title: "E-commerce Responsive Complex Website",
      project_type: "FullStack",
      technologys: "HTML, CSS, JavaScript, Angular, NodeJS, ExpreJS, MySQL",
      description: "Developed a full-stack E-commerce platform with user authentication, cart management, search, and filtering features. Implemented an admin panel for product and order management & main admin can manage users, admin and overall products. Tech Stack: HTML, CSS, Tailwind CSS, Angular, Node.js, Express.js, MySQL.",
      github_link: "https://github.com/Wasim-Afreeth-Z/E-commerce-Website-Frontend",
      website_link: "https://e-commerce-website-fullstack.netlify.app"
    },
    {
      title: "Electronic Bill Apps",
      image: "/images/projects/electronic shop pos.png",
      sub_title: "POS-Screen App multiple-Page Complex Website",
      project_type: "Frontend",
      technologys: "HTML, CSS, JavaScript, Angular",
      description: "In this project we develop a web application Electronic Shop POS-Screen in this Project From Backend List the product then Search and Fliter features are there in Product List Page, then POS-Screen page also product will list we can add to cart the products then we can hold the order and finally we can create invoice also, built using HTML,Tailwind CSS, CSS, JavaScript, Angular (Backend provide by Internship Company).\n*Website Link: Username- super@gmail.com , Password- 1234",
      github_link: "https://github.com/Wasim-Afreeth-Z/Electonic-shop-bill-app-using-Angular",
      website_link: "https://electronic-shop-bill-app-wasim-2.netlify.app/"
    },
    {
      title: "Amazon Clone",
      image: "/images/projects/Amazon-Project.png",
      sub_title: "ecommerce complex multi-page website",
      project_type: "Frontend",
      technologys: "HTML, CSS, JavaScript",
      description: "This is a complex multi-page website where the different pages interact with each other to create a full app. we can add the product in cart and it will also show the cost of our order including shipping and taxes. than we can also track our order.",
      github_link: "https://github.com/Wasim-Afreeth-Z/amazon-clone",
      website_link: "https://amazon-clone-ecommerce-website.netlify.app/"
    },
    {
      title: "Dell online store ",
      image: "/images/projects/dell project.png",
      sub_title: "dell online store basic website",
      project_type: "Frontend",
      technologys: "HTML, CSS, JavaScript",
      description: "In this project we develop a web application to selling a laptops and its accessories.",
      github_link: "https://github.com/Wasim-Afreeth-Z/dell-online-store-basic-website",
      website_link: ""
    }
  ];

  // view the Project
  openProjectViewDailog(project: any) {
    const dialog = this.dialog.open(ViewProjectComponent, {
      width: '600px',
      height: '93%',
      // position: {
      //   top: '20px'
      // },
      data: { project }
    })
    dialog.afterClosed().subscribe({
      next: (res: boolean) => {
        if (res) {
          // this.DisplayProjects()
        }
      }
    })
  }

}
