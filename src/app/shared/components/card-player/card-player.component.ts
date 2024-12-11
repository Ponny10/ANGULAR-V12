import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackModel } from '@core/models/tracks.model';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [
    CommonModule,
    ImgBrokenDirective,
  ],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent implements OnInit {

  @Input() track!: TrackModel;
  @Input() mode: 'small' | 'big' = 'small';

  constructor(private multimediaService: MultimediaService){}

  ngOnInit(): void {
      
  }

  sendTrack(track: TrackModel) {
    this.multimediaService.trackInfo.next(track);
  }

}
