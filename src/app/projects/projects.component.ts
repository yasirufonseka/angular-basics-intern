import { Component } from '@angular/core';
import { CardComponentComponent } from '../Shared/card-component/card-component.component';
import { Projectinterface } from './projectinterface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CardComponentComponent,NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css', 
  standalone:true
})


export class ProjectsComponent {

   projects: Projectinterface []=[{
    name:'Angular',
    description:'Angular is a TypeScript-based free and open-source single-page web application framework. It is developed by Google and by a community of individuals and corporations.',
    link:'https://en.wikipedia.org/wiki/Angular_(web_framework)',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png'
  },
  {
    name:'React',
    description:'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta (formerly Facebook) and a community of individual developers and companies',
    link:'https://en.wikipedia.org/wiki/React_(software)',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png'
   
  },
  {
    name:'Express JS',
    description:'Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js',
    link:'https://en.wikipedia.org/wiki/Express.js',
    image:'https://cdn.prod.website-files.com/6320125ace536b6ad148eca3/66502d746f57d299fe0e0c31_Image%201-Express.js.webp'
   
  },{
    name:'Next JS',
    description:'Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static rendering. ',
    link:'https://en.wikipedia.org/wiki/Next.js',
    image:'https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg'
   
  } 
  ];
  
  }