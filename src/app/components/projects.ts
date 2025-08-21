import { Component } from '@angular/core';

import TitleComponent from './reusable/title';
import ProjectCardComponent from './reusable/project-card';

@Component({
    selector: 'app-projects',
    imports: [TitleComponent, ProjectCardComponent],
    template: `
        <section class="min-h-screen flex items-center justify-start bg-base p-20" id="projects">
            <div class="container mx-auto">
                <app-title name="My Projects"/>
                <p class="text-xl text-left">Here are some projects I worked on during my studies and personal time.</p>
                <div class="flex justify-center mt-12">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                        <app-project-card
                            image="tourism"
                            title="Recommendation System for Tourists"
                            description="Final year capstone project completed in collaboration with 3 other groupmates. Don't know what to visit when travelling to new cities?
                                        Get personalized recommendations through our website!"
                            [technologies]="['TypeScript', 'Python', 'React', 'FastAPI', 'MongoDB', 'HTML/CSS']"
                            [links]="['https://github.com/eho1202/Recommendation-System-for-Tourists', 'https://github.com/eho1202/Tourism_Recommendation_System']"
                            />
                        <app-project-card 
                            image="website" 
                            title="Portfolio Website" 
                            description="I create this portfolio website you're browsing! It serves as a showcase of my work and capabilities."
                            [technologies]="['TypeScript', 'Angular', 'Tailwind']"
                            [links]="['https://github.com/eho1202/ernestine-ho-website']"
                        />
                        <app-project-card
                            image="health"
                            title="Biometrics Health Tracker"
                            description="Currently in development, this app helps users track and monitor important digestive health metrics over time."
                            [technologies]="['Flutter']"
                            [links]="['https://github.com/eho1202/Poop-Tracker']"
                        />
                        <app-project-card
                            image="bank"
                            title="Secure Banking Application"
                            description="This application simulates a basic banking system with functionalities such as 
                                        register, login, deposit, withdraw, and check credit score. The purpose of this 
                                        project is to use encryption methods such as nonces, message authentication code (MAC), 
                                        and digital signatures for authentication and encryption of data sent between the server and client."
                            [technologies]="['Python', 'NiceGUI']"
                            [links]="['https://github.com/JeromeMagpantay/BBL-Project']"
                        />
                        <app-project-card
                            image="satellite"
                            title="Satellite Monitoring System"
                            description="The project consists of a satellite network monitoring system and dashboard. It keeps track of the number of clients within a given 
                                        service area, peak usage times of the system, and key logs of satellites in orbit."
                            [technologies]="['Python', 'TypeScript', 'React', 'FastAPI', 'RabbitMQ', 'MongoDB', 'Docker']"
                            [links]="['https://github.com/JeromeMagpantay/SatelliteMonitoringSystem']"
                        />
                        <app-project-card
                            image="sachs"
                            title="St. Augustine CHS App"
                            description="Contributed to the development and maintenance the Android version of the app that served over 250 students. (The app have since updated to a flutter version)"
                            [technologies]="['Java', 'Firebase']"
                            [links]="['https://app.staugustinechs.ca/']"
                        />
                    </div>
                </div>
            </div>
        </section>
    `
})

export default class ProjectComponents{

}