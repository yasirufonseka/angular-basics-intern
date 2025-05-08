import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { CardComponentComponent } from './Shared/card-component/card-component.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch:  'full'
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'projects',
        component: ProjectsComponent
    },
    {
        path:'card-component',
        component:CardComponentComponent
    }
    
];
