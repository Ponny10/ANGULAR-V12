import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { TrackModel } from '@core/models/tracks.model';
import { TrackServices } from '@modules/tracks/services/track-services.service';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';

@Component({
	selector: 'app-tracks-pages',
	standalone: true,
	imports: [
		SectionGenericComponent,
	],
	templateUrl: './tracks-pages.component.html',
	styleUrl: './tracks-pages.component.css'
})

export class TracksPagesComponent implements OnInit, OnDestroy {

	tracksTrending: TrackModel[] = [];
	tracksRandom: TrackModel[] = [];

	// Varible que almacerá lista de Observables
	listObservers$: Subscription[] = [];

	constructor(private trackService: TrackServices) {}

	ngOnInit(): void {
		this.loadDataAll();
		this.loadDataRandom();
	}

	loadDataAll(): void {
		// TODO: Manejar un Observable como una Promesa
		// TODO: Agregar .toPromise() a la suscripción
		this.trackService.getAllTracks$().toPromise().then((res: TrackModel[]) => {
			this.tracksTrending = res;
		}).catch(e => e);
	}

	loadDataRandom(): void {
		this.trackService.getAllRandom$().subscribe((res: TrackModel[]) => {
			this.tracksRandom = res.reverse();
		});
	}

	ngOnDestroy(): void {
		console.log('Desuscribiendo...');

		// this.listObservers$.forEach(u => u.unsubscribe());
	}

}
