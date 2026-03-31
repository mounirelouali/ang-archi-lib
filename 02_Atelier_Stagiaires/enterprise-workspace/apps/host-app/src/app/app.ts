import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LibHeaderComponent, LibInputComponent } from '@enterprise/ui-kit';

@Component({
  standalone: true,
  imports: [LibHeaderComponent, LibInputComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'host-app';
  private http = inject(HttpClient);
  
  // Signal pour démo LibInputComponent
  userInput = signal('');

  testerAPI() {
    this.http.get('https://jsonplaceholder.typicode.com/users/1')
      .subscribe(console.log);
  }
}
