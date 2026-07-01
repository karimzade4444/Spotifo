import type { IBase } from "./music.types"

export interface IPlaylist extends IBase {
    id: string,
    name: string,
    description: string,
    tracks: ITrack[],
    coverImage: ImageUrl
    owner: {
        id: string,
        displayName: string,
        isPremium: boolean,
    }
    createdAt: Date,
    isPublic: boolean,
    followers: number,
}