import { Component } from '@angular/core';
import { CardComponentComponent } from '../Shared/card-component/card-component.component';
import { Projectinterface } from './projectinterface';

@Component({
  selector: 'app-projects',
  imports: [CardComponentComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})


export class ProjectsComponent {

   projects: Projectinterface []=[{
    name:'yasiru',
    description:'hello'
   }];
  
  }