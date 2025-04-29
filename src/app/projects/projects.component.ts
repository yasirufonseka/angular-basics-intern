import { Component } from '@angular/core';
import { CardComponentComponent } from '../Shared/card-component/card-component.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  imports: [CardComponentComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  // projectobj={
  //   name: String,
  //   description: String
  // }
 
  
  projects: {name:any , description?:String}[] =[ 
    {
      name:'angular',
      description:'hello angular'
    },
    {
      name:'react',
      description:'hello angular'
    },
    {name:'java'}];
  

}