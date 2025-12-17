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
                    <time class="font-mono italic">January 2024 - September 2025</time>
                    <div class="text-lg font-black">Internship @ Pomerleau</div>
                    During my internship at Pomerleau, I worked on cloud-connected frontend and IoT systems using <b>React</b>, 
                    <b>TypeScript</b>, and <b>AWS</b>. I contributed to building and optimizing real-time interfaces, automated container 
                    deployments through <b>AWS IoT Greengrass</b> and <b>CodePipeline</b>, and improved system reliability through testing and CI/CD. 
                    I collaborated closely with cross-functional teams in an <b>Agile environment</b> to deliver scalable, production-ready solutions.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div class="timeline-middle">
                    <app-tick-icon/>
                </div>
                <div class="timeline-end md:mb-10 text-left">
                    <time class="font-mono italic">June 2023 - December 2024</time>
                    <div class="text-lg font-black">Internship @ AskLora</div>
                    At AskLora, I developed and tested financial automation tools, including an <b>AI-powered chatbot</b> built with <b>Svelte</b>, 
                    <b>FastAPI</b>, and <b>OpenAI APIs</b>. I automated transaction verification using <b>SQL</b>, <b>VBA</b>, and <b>Python</b>, and improved QA workflows 
                    through UI automation and CI-based validation pipelines, increasing testing efficiency and reliability.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div class="timeline-middle">
                    <app-tick-icon/>
                </div>
                <div class="timeline-start mb-10 md:text-end text-left">
                    <time class="font-mono italic">September 2022 - December 2022</time>
                    <div class="text-lg font-black">Project Manager @ TMU</div>
                    I worked as a Project Manager for the Introduction to Engineering (CEN100) course at Toronto Metropolitan University for 4 months. 
                    Taught 40+ first-year engineering students introductory concepts such as <b>Design Notebook</b>, <b>Reverse Engineering</b>, and <b>introductory MATLAB</b>.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div class="timeline-middle">
                    <app-tick-icon/>
                </div>
                <div class="timeline-end md:mb-10 text-left">
                    <time class="font-mono italic">September 2021 - June 2022</time>
                    <div class="text-lg font-black">Software Developer @ Toronto Metrobotics</div>
                    I joined Toronto Metrobotics to gain hands-on software development experience on real-world engineering projects.
                    I collaborated with multidisciplinary teams to build <b>full-stack dashboards</b> supporting geological analysis and autonomous rover operations. 
                    I developed real-time monitoring and data visualization tools using <b>Java</b>, <b>Spring Boot</b>, <b>React</b>, and <b>Python</b>, helping
                    translate scientific requirements into usable software solutions.
                </div>
            </li>
        </ul>
    </div>`
})

export default class ExperienceComponent {
}