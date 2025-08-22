import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    imports: [CommonModule],
    template: `
    <nav class="navbar bg-base-100 shadow-sm px-6 justify-between z-[999] fixed">
        <div class="flex items-center gap-2 font-medium">
            Ernestine Ho
        </div>
        <div role="tablist" class="tabs tabs-border flex items-end">
            <ul class="menu menu-horizontal px-1">
            <li><a role="tab" class="tab hover:text-primary" [class.tab-active]="activeTab === 'about'" (click)="scrollToSection('about', $event)">About Me</a></li>
            <li><a role="tab" class="tab hover:text-primary" [class.tab-active]="activeTab === 'tech'" (click)="scrollToSection('tech', $event)">Experiences</a></li>
            <li><a role="tab" class="tab hover:text-primary" [class.tab-active]="activeTab === 'projects'" (click)="scrollToSection('projects', $event)">Projects</a></li>
            <li><a role="tab" class="tab hover:text-primary" [class.tab-active]="activeTab === 'contact'" (click)="scrollToSection('contact', $event)">Contact</a></li>
            </ul>
        </div>
    </nav>
    `
})

export default class NavbarComponent implements OnInit, OnDestroy {
    activeTab = 'about';
    private scrollSubscription?: Subscription;

    ngOnInit() {
        this.scrollSubscription = fromEvent(window, 'scroll').subscribe(() => {
            this.updateActiveTabOnScroll();
        });
    }

    scrollToSection(sectionId: string, event: Event) {
        event.preventDefault();

        this.activeTab = sectionId;

        const element = document.getElementById(sectionId);
        if (element) {
            const navbar = document.querySelector('nav.navbar');
            const navbarHeight = navbar?.clientHeight || 64;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

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