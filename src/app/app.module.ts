import { NgModule } from '@angular/core';
import { LucideAngularModule, House, Award, GraduationCap, Mail } from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({ House, Award, GraduationCap, Mail })
  ],
})

export class AppModule { }
