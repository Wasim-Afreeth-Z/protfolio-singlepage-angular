import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceFileComponent } from './service-file/service-file.component';
import { SkillComponent } from './skill/skill.component';
import { QualificationComponent } from './qualification/qualification.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { ViewProjectComponent } from './view-project/view-project.component';

export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component:HomeComponent},
    { path: 'about', component:AboutComponent},
    { path: 'services', component:ServiceFileComponent},
    { path: 'skill', component:SkillComponent},
    { path: 'quali', component:QualificationComponent},
    { path: 'project', component:ProjectComponent},
    { path: 'contact', component:ContactComponent},
    // { path: 'viewproject', component:ViewProjectComponent},
];
