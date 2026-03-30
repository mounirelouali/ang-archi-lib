import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibHeaderComponent } from '@enterprise/ui-kit';

@Component({
  standalone: true,
  imports: [LibHeaderComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'host-app';
}
