import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  imports: [],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.css'
})
export class CardComponentComponent {
  
  @Input() name:String =''  ;
 @Input() description:String ='' ;

}
