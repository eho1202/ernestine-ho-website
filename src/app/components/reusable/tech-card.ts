import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tech-card',
    template: `
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:py-1.5 py-1 bg-base-100 shadow-md">
            <img src="/assets/images/logos/{{icon}}.svg" alt="{{name}}" class="h-8 w-auto md:h-6 pt-1 sm:pt-0" />
            <span class="font-medium">{{ name }}</span>
        </div>
    `,
})

export default class TechCardComponent {
    @Input() icon: string = '';
    @Input() name: string = '';
}
