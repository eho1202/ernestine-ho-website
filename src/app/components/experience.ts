import { Component } from "@angular/core";

import TickIconComponent from './reusable/tick-icon';

@Component({
    selector: 'app-experience',
    imports: [TickIconComponent],
    template:`
    <div class="mt-2">
        <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
                <div class="timeline-middle">
                    <app-tick-icon/>
                </div>
                <div class="timeline-start mb-10 md:text-end text-left">
                    <time class="font-mono italic">Current</time>
                    <div class="text-lg font-black">Software Developer @ Pomerleau</div>
                    Currently working as a Software Developer at Pomerleau.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div class="timeline-middle">
                    <app-tick-icon/>
                </div>
                <div class="timeline-end md:mb-10 text-left">
                    <time class="font-mono italic">January 2024</time>
                    <div class="text-lg font-black">Internship @ Pomerleau</div>
                    I worked as a Software Developer intern at Pomerleau for 8 months.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div class="timeline-middle">
                    <app-tick-icon/>
                </div>
                <div class="timeline-start mb-10 md:text-end text-left">
                    <time class="font-mono italic">June 2023</time>
                    <div class="text-lg font-black">Internship @ AskLora</div>
                    I worked as a Product Manager intern at Asklora for 6 months.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div class="timeline-middle">
                    <app-tick-icon/>
                </div>
                <div class="timeline-end md:mb-10 text-left">
                    <time class="font-mono italic">September 2022</time>
                    <div class="text-lg font-black">Project Manager @ TMU</div>
                    I worked as a Project Manager for Introduction to Engineering (CEN100) course at Toronto Metropolitan University for 4 months.
                </div>
            </li>
        </ul>
    </div>`
})

export default class ExperienceComponent {
}