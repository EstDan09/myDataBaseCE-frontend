import { Component, Input } from '@angular/core';
import { Columnoide } from '../auth/interfaces/auth.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  
})
export class CardComponent {
  @Input() columna!: Columnoide;
}
