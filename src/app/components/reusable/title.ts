import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-title',
    template: `
        <div class="flex items-center mb-12">
            <h1 class="text-4xl font-bold">{{name}}</h1>
            <div class="flex-1 h-[2px] bg-current ml-2 mt-6 -mr-10"></div>
        </div>`
})

export default class TitleComponent{
    @Input() name: string = '';
}