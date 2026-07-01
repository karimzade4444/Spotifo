export type ID = string;
export type ImageUrl = string;

/*
type Duration = number;
type isPublished = boolean;
type artist = null | string;
type album = undefined | string;
*/

export type TStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

type TBase = {
    id: ID,
    createdAt: string,
    updatedAt: string
}

export type TArtist = {
    name: string,
    image: ImageUrl,
    isVerifed: boolean
} & TBase


export interface IBase {
  id: ID;
  createdAt: string;
  updatedAt: string;
}

interface IArtist extends IBase {
name: string,
image: ImageUrl,
isVerifed: boolean,

}

export interface ITrack extends IBase {
    artist: IArtist,
    title: string,
    duration: number,
    isPublished: boolean
}



