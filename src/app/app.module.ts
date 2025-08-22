import { NgModule } from '@angular/core';
import { LucideAngularModule, Award, GraduationCap, Mail } from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({ Award, GraduationCap, Mail })
  ],
})

export class AppModule { }
