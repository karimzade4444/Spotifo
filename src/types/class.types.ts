import { Howl } from 'howler' 
import type { IPlayerState } from './player.types';
import type { ITrack } from './music.types';


export class SporifoPlayer {
    private audio: Howl | null = null;
    private state: IPlayerState

    constructor(){
    this.state = {
        currentTrack: null,
        queue: [],
        history: [],
        isPlaying: false,
        volume: 0.7,
        currentTime: 0,
        repeatMode: 'off',
        isShuffling: false,
    }
}
play(track?:ITrack): void {
    if (track) {
        this.loadTrack(track);