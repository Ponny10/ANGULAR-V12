import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent implements OnInit {

  src: string = '';

  @Output() callSearch: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
      
  }

  Search($event: string): void {
    if (this.src.length >= 3) {
      this.callSearch.emit($event);
      console.log('---->Search desde el hijo = ', $event);
    }
  }

}
