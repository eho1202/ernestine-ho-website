import { Component } from '@angular/core';

import TechCardComponent from '../components/reusable/tech-card';
import ExperienceComponent from './experience';
import TitleComponent from './reusable/title';

@Component({
    selector: 'app-tech-stack',
    imports: [TechCardComponent, ExperienceComponent, TitleComponent],
    template: `
    <section id="tech" class="min-h-screen flex items-center justify-center bg-base-200 p-10 md:p-20 overflow-x: hidden;">
        <div class="container mx-auto">
            <app-title name="My Skills and Experience."/>
            <div class="mb-6">
                <h2 class="text-2xl text-center md:text-left font-semibold mb-4">Programming Languages</h2>
            </div>
            <div class="pl-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 mb-16">
                <app-tech-card icon="typescript_logo" name="TypeScript"></app-tech-card>
                <app-tech-card icon="javascript_logo" name="JavaScript"></app-tech-card>
                <app-tech-card icon="python_logo" name="Python"></app-tech-card>
                <app-tech-card icon="java_logo" name="Java"></app-tech-card>
                <app-tech-card icon="html_logo" name="HTML"></app-tech-card>
                <app-tech-card icon="css_logo" name="CSS"></app-tech-card>
                <app-tech-card icon="sql_logo" name="SQL"></app-tech-card>
                <app-tech-card icon="nosql_logo" name="NoSQL"></app-tech-card>
            </div>
            <div class="mb-6">
                <h2 class="text-2xl text-center md:text-left font-semibold mb-4">Tools and Technologies</h2>
            </div>
            <div class="pl-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 mb-20">
                <app-tech-card icon="react_logo" name="React"></app-tech-card>
                <app-tech-card icon="angular_logo" name="Angular"></app-tech-card>
                <app-tech-card icon="tailwind_logo" name="Tailwind"></app-tech-card>
                <app-tech-card icon="fastapi_logo" name="FastAPI"></app-tech-card>
                <app-tech-card icon="nodejs_logo" name="Node.js"></app-tech-card>
                <app-tech-card icon="mongodb_logo" name="MongoDB"></app-tech-card>
                <app-tech-card icon="postgresql_logo" name="PostgreSQL"></app-tech-card>
                <app-tech-card icon="mysql_logo-cropped" name="MySQL"></app-tech-card>
                <app-tech-card icon="aws_cloud_logo_light" name="AWS"></app-tech-card>
                <app-tech-card icon="docker_logo" name="Docker"></app-tech-card>
                <app-tech-card icon="git_logo" name="Git"></app-tech-card>
                <app-tech-card icon="jira_logo" name="Jira"></app-tech-card>
            </div>
            <h2 class="text-2xl text-center md:text-left font-semibold mb-6">My Work Experience</h2>
            <app-experience/>
        </div>
    </section>
    `
})

export default class TechStackComponent {

}