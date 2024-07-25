import { Component } from '@angular/core';
import { CounterPage } from '../pages/counter/counter.page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterPage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Angular';
}
