import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommanService } from '../../Services/comman.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  // inject
  commanService = inject(CommanService)
  authService = inject(AuthService)
  route = inject(Router)

  abouts: any;

  ngOnInit() {
    const header = document.querySelector("nav")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header!.classList.add('scrolled')
      } else {
        header!.classList.remove('scrolled')
        this.headerValue = true
        this.headerIcon = "fa fa-bars"
      }
    })

    this.DisplayAboutDetails()
  }

  headerIcon: string = "fa fa-bars"
  headerValue: boolean = true;

  headerChange() {
    this.headerValue = !this.headerValue
    this.headerIcon = !this.headerValue ? "fa fa-close" : "fa fa-bars"
  }

  home() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
    this.headerValue = true
    this.headerIcon = "fa fa-bars"
  }

  about() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    this.headerValue = true
    this.headerIcon = "fa fa-bars"
  }
  contact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    this.headerValue = true
    this.headerIcon = "fa fa-bars"
  }
  services() {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    this.headerValue = true
    this.headerIcon = "fa fa-bars"
  }
  project() {
    document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' })
    this.headerValue = true
    this.headerIcon = "fa fa-bars"
  }
  skill() {
    document.getElementById('skill')?.scrollIntoView({ behavior: 'smooth' })
    this.headerValue = true
    this.headerIcon = "fa fa-bars"
  }
  quali() {
    document.getElementById('quali')?.scrollIntoView({ behavior: 'smooth' })
    this.headerValue = true
    this.headerIcon = "fa fa-bars"
  }

  // show data from database
  DisplayAboutDetails(): void {
    this.commanService.DisplayAboutDetails().subscribe({
      next: (data: any) => {
        // console.log(data);
        const response = this.authService.decryptData({ data: data })
        this.abouts = response
        // console.log(response);
      }
    })
  }
}
