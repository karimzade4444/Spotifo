type ID = string;
type ImageUrl = string;

/*
type Duration = number;
type isPublished = boolean;
type artist = null | string;
type album = undefined | string;
*/

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


interface IBase {
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



