import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { LucideAngularModule } from 'lucide-angular';
import { AppModule } from '../app.module';

@Component({
    selector: 'app-navbar',
    imports: [AppModule, LucideAngularModule],
    template: `
    <nav class="navbar bg-base-100 shadow-sm px-6 justify-between fixed z-[999]">
        <div class="flex items-center gap-2">
            <a href="#" class="btn btn-ghost text-xl flex items-center gap-2" (click)="scrollToSection('home', $event)">
                <lucide-icon name="house" class="w-6 h-6"/>
            </a>
            <input
                type="checkbox"
                checked="checked"
                class="toggle toggle-neutral dark:bg-white dark:checked:bg-white"
                [checked]="isDarkMode"
                (change)="toggleTheme($event)"
            />
        </div>
        <div role="tablist" class="tabs tabs-border flex items-center">
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
    isDarkMode = false;
    activeTab = 'home';
    isSticky = false;
    private scrollSubscription?: Subscription;

    toggleTheme(event: Event): void {
        this.isDarkMode = (event.target as HTMLInputElement).checked;
        document.documentElement.setAttribute(
            'data-theme',
            this.isDarkMode ? 'dark' : 'light'
        );
    }

    private applyTheme(dark: boolean): void {
        if (dark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    ngOnInit() {
        this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.applyTheme(this.isDarkMode);
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            this.isDarkMode = e.matches;
            this.applyTheme(this.isDarkMode);
        });

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
        
        // Update active tab
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
        const navbarHeight = 80;
        
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