import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-media-component',
  styleUrl: './media-component.css',
  templateUrl: './media-component.html',
})
export class MediaComponent {
  mediaParcial: number | null = null

  calcularMedia(bim1: number, bim2: number) {
    this.mediaParcial = (2 * bim1 + 3 * bim2) / 5
  }
}
