import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<TrackModel> = new EventEmitter<TrackModel>();

  public trackInfo: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public audio!: HTMLAudioElement;

  public timeElapsed: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaining: BehaviorSubject<string> = new BehaviorSubject('-00:00');

  public playerStatus: BehaviorSubject<string> = new BehaviorSubject('');

  public playerPorcentage: BehaviorSubject<number> = new BehaviorSubject(0);

  // TODO: Declarando un Observable
  observable: Observable<any> = new Observable();

  constructor() {
    this.audio = new Audio();
    this.trackInfo.subscribe((res: any) => {
      console.log('Nueva data = ', res);
      this.setAudio(res);
    });
    this.listenAllEvents();
  }

  private listenAllEvents() {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
    this.audio.addEventListener('playing', this.setPlayerStatus, false);
    this.audio.addEventListener('play', this.setPlayerStatus, false);
    this.audio.addEventListener('pause', this.setPlayerStatus, false);
    this.audio.addEventListener('ended', this.setPlayerStatus, false);
  }

  private calculateTime = () => {
    const { duration, currentTime } = this.audio;
    this.setTimeElapsed(currentTime);
    this.setTimeRemaining(currentTime, duration);
    this.setPorcentage(currentTime, duration);
  }

  private setTimeElapsed(currentTime: number) {
    let seconds = Math.floor(currentTime % 60);
    let minutes = Math.floor((currentTime / 60) % 60);

    const displaySeconds = (seconds < 10 ? `0${seconds}` : seconds);
    const displayMinutes = (minutes < 1 ? `0$${minutes}` : minutes);

    const displayFormat = `${displayMinutes}:${displaySeconds}`;

    this.timeElapsed.next(displayFormat);
  }

  private setTimeRemaining(currentTime: number, duration: number) {
    let timeLeft = duration - currentTime;
    let seconds = Math.floor(timeLeft % 60);
    let minutes = Math.floor((timeLeft / 60) % 60);

    const displaySeconds = (seconds < 10 ? `0${seconds}` : seconds);
    const displayMinutes = (minutes < 1 ? `0$${minutes}` : minutes);

    const displayFormat = `-${displayMinutes}:${displaySeconds}`;

    this.timeRemaining.next(displayFormat);
  }

  private setPlayerStatus = (state: any) => {
    switch (state.type) { //TODO: --> playing
      case 'play':
        this.playerStatus.next('play')
        break
      case 'playing':
        this.playerStatus.next('playing')
        break
      case 'ended':
        this.playerStatus.next('ended')
        break
      default:
        this.playerStatus.next('paused')
        break;
    }
  }

  public togglePlayer() {
    this.audio.paused ? this.audio.play() : this.audio.pause();
  }

  private setPorcentage = (currentTime: number, duration: number) => {
    let porcentage = (currentTime * 100) / duration;
    this.playerPorcentage.next(porcentage);
  }

  // TODO: Funciones públicas
  public setAudio(track: TrackModel) {
    this.audio.src = track.url;
    this.audio.play();
  }


}
