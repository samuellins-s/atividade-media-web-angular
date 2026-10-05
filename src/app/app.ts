import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MediaComponent } from './media-component/media-component';

@Component({
  imports: [RouterOutlet, MediaComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('atividade-dois-web');
}
