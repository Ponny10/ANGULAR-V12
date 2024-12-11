import { Component } from '@angular/core';
import { HeaderPlayerComponent } from '@shared/components/header-player/header-player.component';
import { ListPlayerComponent } from '@shared/components/list-player/list-player.component';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [
    HeaderPlayerComponent,
    ListPlayerComponent,
  ],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css'
})
export class FavoritesPageComponent {

}
