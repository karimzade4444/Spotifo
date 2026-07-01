type ID = string;
type ImageUrl = string;

/*
type Duration = number;
type isPublished = boolean;
type artist = null | string;
type album = undefined | string;
*/



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
id: ID,
name: string,
image: ImageUrl,
isVerifed: boolean,

}

export interface ITrack extends IBase {
    id: ID,
    artist: IArtist,
    title: string,
    duration: number,
    isPublished: boolean
}



