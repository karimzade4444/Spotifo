import type { IBase, ID, ImageUrl, ITrack } from "./music.types"

export interface IPlaylist extends IBase {
    name: string,
    description: string,
    tracks: ITrack[],
    coverImage: ImageUrl,
    owner: {
        id: ID,
        displayName: string,
        isPremium: boolean,
    }
    isPublic: boolean,
    followers: number,
}