type ID = string;
type ImageUrl = string;

/*
type Duration = number;
type isPublished = boolean;
type artist = null | string;
type album = undefined | string;
*/

interface IArtist {
id: ID,
name: string,
image: ImageUrl;
isVerifed: boolean
}

interface ITrack {
    id: ID,
    artist: IArtist
}

interface IBase {
    id: ID,
    createdAt: string,
    updatedAt: string
}

