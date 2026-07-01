import type { IArtist, ITrack } from "./music.types";
import type { IPlaylist } from "./playlist.types";

function spotifoApi(endpoint: 'track', id: string): Promise<ITrack>;
function spotifoApi(endpoint: 'artist', id: string): Promise<IArtist>;
function spotifoApi(endpoint: 'playlist', id: string): Promise<IPlaylist>;
function spotifoApi(endpoint: string, id: string): Promise<unknown>{
    return fetch(`https://api.spotifo.com/${endpoint}/${id}`).then(res=>res.json());
}