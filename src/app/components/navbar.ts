import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { LucideAngularModule } from 'lucide-angular';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    imports: [AppModule, LucideAngularModule, CommonModule],
    template: `
    <nav class="navbar bg-base-100 shadow-sm px-6 justify-between z-[999] fixed">
        <div class="flex items-center gap-2 font-medium">
            Ernestine Ho
        </div>
        <div role="tablist" class="tabs tabs-border flex justify-end items-center ml-auto">
            <ul class="menu menu-horizontal px-1">
            <li><a role="tab" href="#about" class="tab hover:text-primary" [class.tab-active]="activeTab === 'about'" (click)="scrollToSection('about', $event)">About Me</a></li>
            <li><a role="tab" href="#tech" class="tab hover:text-primary" [class.tab-active]="activeTab === 'tech'" (click)="scrollToSection('tech', $event)">Experiences</a></li>
            <li><a role="tab" href="#projects" class="tab tab-active hover:text-primary" [class.tab-active]="activeTab === 'projects'" (click)="scrollToSection('projects', $event)">Projects</a></li>
            <li><a role="tab" href="#contact" class="tab hover:text-primary" [class.tab-active]="activeTab === 'contact'" (click)="scrollToSection('contact', $event)">Contact</a></li>
            </ul>
        </div>
    </nav>
    `
})

export default class NavbarComponent implements OnInit, OnDestroy {
    activeTab = 'about';
    isSticky = false;
    private scrollSubscription?: Subscription;

    ngOnInit() {
        this.scrollSubscription = fromEvent(window, 'scroll').subscribe(() => {
        const heroElement = document.querySelector('app-hero-section');
        if (heroElement) {
            const heroBottom = heroElement.getBoundingClientRect().bottom;
            this.isSticky = heroBottom <= 0;
        }
        
        this.updateActiveTabOnScroll();
        });
    }

    scrollToSection(sectionId: string, event: Event) {
        event.preventDefault();
        
        this.activeTab = sectionId;
        
        const element = document.getElementById(sectionId);
        if (element) {
        const navbarHeight = 64;
        const elementPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
        }
    }

    private updateActiveTabOnScroll() {
        const sections = ['about', 'tech', 'projects', 'contact'];
        const navbarHeight = 64;
        
        for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= navbarHeight + 100) {
            this.activeTab = sections[i];
            break;
            }
        }
        }
    }

    ngOnDestroy() {
        this.scrollSubscription?.unsubscribe();
    }

}