import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultimediaService } from '../../services/multimedia.service';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  listObservable: Subscription[] = [];

  state: string = 'paused';

  constructor(public multimediaService: MultimediaService) {}

  ngOnInit(): void {
    const obs = this.multimediaService.playerStatus.subscribe((res) => {
      this.state = res;
      console.log('Status de play ', res, ' ==>>>> ', this.state);
    })

    this.listObservable = [obs];
  }

  ngOnDestroy(): void {
       this.listObservable.forEach(observable => observable.unsubscribe());
  }
}
