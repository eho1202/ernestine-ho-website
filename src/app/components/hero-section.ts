import { Component } from '@angular/core';

@Component({
    selector: 'app-hero-section',
    template: `
        <section class="min-h-screen flex items-center justify-start bg-base-200 p-20" id="home">
            <div class="hero-content text-left">
                <div class="space-y-6">
                    <h4 class="text-2xl">Hey, I'm <span class="text-primary">Ernestine Ho</span></h4>
                    <h1 class="text-8xl">Welcome to my<br>portfolio website!</h1>
                    <h5 class="text-xl">I am a software engineer with a passion for building innovative solutions.</h5>
                </div>
            </div>
        </section>`,
})

export default class HeroSectionComponent {
}