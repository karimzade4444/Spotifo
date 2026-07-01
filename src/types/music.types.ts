type ID = string;
type Duration = number;
type ImageUrl = string;
type isPublished = boolean;
type artist = null | string;
type album = undefined | string;

interface IArtist {
id: ID,
name: string,
image: ImageUrl;
isVerifed: boolean
}

interface ITrack {
    id: ID,
}