import { Component } from '@angular/core';

import NavbarComponent from '../components/navbar';
import HeroSectionComponent from '../components/hero-section';
import AboutComponent from '../components/about';
import TechStackComponent from '../components/tech-stack';
import ProjectComponents from '../components/projects';
import ContactComponent from '../components/contact';
import FooterComponent from '../components/footer';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeroSectionComponent, AboutComponent, TechStackComponent, ProjectComponents, ContactComponent, FooterComponent],
  template: `
      <app-navbar/>
      <app-hero-section/>
      <app-about/>
      <app-tech-stack/>
      <app-projects/>
      <app-contact/>
      <app-footer/>
  `,
})
export default class HomeComponent {
}
