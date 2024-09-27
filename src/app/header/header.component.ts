import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  // inject
  route = inject(Router)

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
}