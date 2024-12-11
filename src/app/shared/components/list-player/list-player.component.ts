import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackModel } from '@core/models/tracks.model';

import { OrderListPipe } from '@shared/pipes/order-list.pipe';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';

@Component({
  selector: 'app-list-player',
  standalone: true,
  imports: [
    CommonModule,
    ImgBrokenDirective,
    OrderListPipe,
  ],
  templateUrl: './list-player.component.html',
  styleUrl: './list-player.component.css'
})
export class ListPlayerComponent implements OnInit {

  @Input() tracks: TrackModel[] | null = [];

  optionSort: {
    property: string | null,
    sort: string,
  } = {
    property: null,
    sort: 'asc',
  }

  ngOnInit(): void {
  }

  changeSort(property: string): void {
    const {sort} = this.optionSort;
    this.optionSort = {
      property,
      sort: sort === 'asc' ? 'desc' : 'asc',
    }
  }

}
