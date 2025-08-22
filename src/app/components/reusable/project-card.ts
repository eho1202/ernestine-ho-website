import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-project-card',
    imports: [CommonModule],
    template: `
        <div class="card card-border w-96 h-130 bg-base-100 shadow-sm border">
            <figure>
                <img src="/assets/images/{{image}}.png" alt={{image}} class="h-50 w-auto mt-2"/>
            </figure>
            <div class="card-body">
                <h2 class="card-title">{{title}}</h2>
                <div class="flex flex-wrap gap-2 mb-2">
                    @for(tech of technologies; track tech) {
                        <span class="badge text-white" [ngStyle]="{'background-color': getBadgeColor(tech)}">
                            {{tech}}
                        </span>
                    }
                </div>
                <p>{{description}}</p>
                <div class="card-actions justify-end">
                    @for(link of links; track link) {
                        <button class="btn btn-primary" (click)="openLink(link)">
                            <img src="/assets/images/logos/github_logo.svg" class="h-6 w-6 object-contain invert" alt="GitHub"/>
                        </button>
                    }
                </div>
            </div>
        </div>
    `
})

export default class ProjectCardComponent {
    @Input() image: string = '';
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() technologies: string[] = [];
    @Input() links: string[] = [];

    getBadgeColor(tech: string): string {
        const colors: { [key: string]: string } = {
            Angular: '#DD0031',
            React: '#61DAFB',
            Flutter: '#02569B',
            Tailwind: '#38BDF8',
            FastAPI: '#009688',
            MongoDB: '#47A248',
            Docker: '#2496ED',
            Git: '#F05032',
            Python: '#3776AB',
            JavaScript: '#F7DF1E',
            TypeScript: '#3178C6',
            Java: '#b07219',
            gRPC: '#1A7EAF',
            RabbitMQ: '#F1A800',
            Firebase: '#FFCA28',
            MySQL: '#4479A1',
            PostgreSQL: '#336791',
            AWS: '#FF9900',
            "HTML/CSS": '#E34F26',
            NiceGUI: '#027be3',
        };
        return colors[tech] || 'badge-soft';
    }

    openLink(url: string): void {
        window.open(url, '_blank');
    }
}