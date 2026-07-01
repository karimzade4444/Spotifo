type ID = string;
type ImageUrl = string;

/*
type Duration = number;
type isPublished = boolean;
type artist = null | string;
type album = undefined | string;
*/


interface IBase {
  id: ID;
  createdAt: string;
  updatedAt: string;
}

interface IArtist extends IBase {
id: ID,
name: string,
image: ImageUrl;
isVerifed: boolean
}

interface ITrack extends IBase {
    id: ID,
    artist: IArtist
}



