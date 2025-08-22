import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { AppModule } from '../app.module';

import CardComponent from './reusable/card';
import TitleComponent from './reusable/title';

@Component({
  selector: 'app-about',
  imports: [LucideAngularModule, AppModule, CardComponent, TitleComponent],
  template: `
    <section id="about" class="min-h-screen flex items-center justify-center bg-base pt-20">
      <div class="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        <div class="flex-1 flex order-0 lg:order-1 lg:items-start lg:mt-20 xl:justify-end">
          <img src="/assets/images/profile-pic.png" class="max-w-sm rounded-lg shadow-2xl mb-4" alt="Profile Picture" />
        </div>
        <div class="flex-1 text-left">
          <app-title name="Hey I'm Ernestine Ho!"/>
          <div class="space-y-6">
            <div class="flex flex-col gap-4 mb-6 order-1 items-center justify-center md:flex-row md:items-start lg:order-1">
              <app-card icon="award" title="Experience" description="1+ Year in Software Development"></app-card>
              <app-card icon="graduation-cap" title="Education" description="B.Eng. Computer Engineering @ TMU"></app-card>
            </div>
            <p>
              I am a <b>recent Computer Engineering graduate</b> from Toronto Metropolitan University (formerly Ryerson University) with a 
              passion for building innovative and efficient software solutions.
            </p>
            <p>
              I have experience in full-stack development, using front-end technologies such as <b>Angular</b> and <b>React</b>, as well as back-end technologies such as <b>FastAPI</b> and <b>MongoDB</b>.
            </p>
            <p>
              I am passionate about software development, data science, and advancing AI technologies to make our day to day life a little less mundane!
            </p>
            <div class="flex items-center justify-center lg:items-start lg:justify-start">
              <button class="btn btn-secondary mt-4 mb-6" onclick="window.open('/assets/pdfs/Ernestine_Ho_Resume.pdf', '_blank')">Check Out My Resume :)</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})

export default class AboutComponent {
}