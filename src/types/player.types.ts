import type { ITrack } from "./music.types";

export interface IPlayerState {
    currentTrack: ITrack | null,
    queve: ITrack[],
    history: ITrack[],
    isPlaying: boolean,
    volume: number,
    currentTime: number,
    duration: number,
    repeatMode: 'off' | 'one' | 'all',
    isShuffling: boolean
}