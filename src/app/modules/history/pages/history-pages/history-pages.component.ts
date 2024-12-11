import { Component, OnInit } from '@angular/core';
import { SearchComponent } from "@shared/components/search/search.component";
import { ListPlayerComponent } from "@shared/components/list-player/list-player.component";
import { SearchServiceService } from '@modules/history/services/search-service.service';
import { TrackModel, TracksModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TracksModule } from '../../../tracks/tracks.module';

@Component({
  selector: 'app-history-pages',
  standalone: true,
  imports: [SearchComponent, ListPlayerComponent, CommonModule],
  templateUrl: './history-pages.component.html',
  styleUrl: './history-pages.component.css'
})


export class HistoryPagesComponent implements OnInit {

  resultSearch: Observable<TrackModel[]> = of([]);

  constructor(private searchService: SearchServiceService) {

  }

  ngOnInit(): void {
      
  }

  search($event: string): void {
    this.resultSearch = this.searchService.searchTrack($event);
  }

}
