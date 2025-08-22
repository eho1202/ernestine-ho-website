import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    imports: [CommonModule],
    template: `
    <nav class="navbar bg-base-100 shadow-sm px-6 justify-between z-[999] fixed">
        <div class="flex items-center font-medium">
            Ernestine Ho
        </div>
        <div role="tablist" class="tabs tabs-border tabs-sm grid grid-cols-2 sm:flex sm:items-end">
            <a role="tab" class="tab hover:text-primary" [class.tab-active]="activeTab === 'about'" (click)="scrollToSection('about', $event)">About Me</a>
            <a role="tab" class="tab hover:text-primary" [class.tab-active]="activeTab === 'tech'" (click)="scrollToSection('tech', $event)">Experiences</a>
            <a role="tab" class="tab hover:text-primary" [class.tab-active]="activeTab === 'projects'" (click)="scrollToSection('projects', $event)">Projects</a>
            <a role="tab" class="tab hover:text-primary" [class.tab-active]="activeTab === 'contact'" (click)="scrollToSection('contact', $event)">Contact</a>
        </div>
    </nav>
    `
})

export default class NavbarComponent implements OnInit {
    activeTab: string = 'about';

    ngOnInit() {
        this.updateActiveTab();
    }

    scrollToSection(sectionId: string, event: Event) {
        event.preventDefault();
        
        this.activeTab = sectionId;
        const element = document.getElementById(sectionId);
        const navbar = document.querySelector('nav.navbar');
        if (element && navbar) {
            const navbarHeight = navbar.clientHeight;
            const offsetTop = element.offsetTop - navbarHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        this.updateActiveTab();
    }

    private updateActiveTab() {
        const sections = ['about', 'tech', 'projects', 'contact'];
        const navbar = document.querySelector('nav.navbar');
        if (!navbar) return;
        const navbarHeight = navbar.clientHeight;
        
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

}