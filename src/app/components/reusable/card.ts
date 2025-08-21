import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { AppModule } from '../../app.module';

@Component({
    selector: 'app-card',
    imports: [AppModule, LucideAngularModule],
    template: `
        <div class="card card-border w-90 bg-base-100 shadow-sm border mb-4">
            <div class="card-body flex items-center text-center">
                <lucide-icon [name]="icon" class="w-6 h-6"/>
                <h2 class="text-2xl font-bold">{{ title }}</h2>
                <p class="text-sm">{{ description }}</p>
            </div>
        </div>
    `,
})

export default class CardComponent {
    @Input() icon: string = '';
    @Input() title: string = '';
    @Input() description: string = '';
}
