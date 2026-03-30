import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-header',
  standalone: true,
  templateUrl: './lib-header.component.html',
  styleUrl: './lib-header.component.scss'
})
export class LibHeaderComponent {
  filiale = input.required<string>();
  showProfile = input<boolean>(false);
}
