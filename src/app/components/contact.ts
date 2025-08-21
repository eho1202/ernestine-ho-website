import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { AppModule } from '../app.module';

@Component({
    selector: 'app-contact',
    imports: [AppModule, LucideAngularModule],
    template: `
        <section class="min-h-screen flex items-center justify-center bg-base-200" id="contact">
            <div class="container mx-auto flex flex-col lg:flex-row items-start justify-center">
                <div class="space-y-2 text-center">
                    <h2 class="text-2xl">Let's Get in Touch!</h2>
                    <h1 class="text-6xl mb-6">Contact Me</h1>
                    <div class="w-full h-24 bg-base-100 border border-neutral-content rounded-4xl px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 max-w-2xl shadow-sm">
                        <div class="flex items-center gap-1">
                            <lucide-icon name="mail" class="translate-y-0.5"></lucide-icon>
                            <a href="mailto:ernestineho1202@gmail.com" class="text-2xl mr-2 mr-2 hover:text-gray-400 hover:underline transition-colors duration-300">ernestineho1202@gmail.com</a>
                        </div>
                        <div class="flex items-center gap-1">
                            <img src="/assets/images/logos/linkedin_logo.svg" class="h-8 w-8"/>
                            <a href="https://www.linkedin.com/in/ernestineho/" target="_blank" rel="noopener noreferrer" class="text-2xl hover:text-gray-400 hover:underline  transition-colors duration-300">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
})

export default class ContactComponent{

}