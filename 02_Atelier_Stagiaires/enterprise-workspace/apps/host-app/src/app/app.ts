import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  private http = inject(HttpClient);

  testerAPI() {
    this.http.get('https://jsonplaceholder.typicode.com/users/1')
      .subscribe(console.log);
  }
}
