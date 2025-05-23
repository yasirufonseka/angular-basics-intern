import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  imports: [],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.css',
  standalone:true
})
export class CardComponentComponent {
  
 @Input() name:string='';
 @Input() description:string='';
 @Input() link:any;
 @Input() image:any;

}
