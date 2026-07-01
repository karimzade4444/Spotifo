import type { ITrack } from "./music.types";

function spotifoApi(endpoint: 'track', id: string): Promise<ITrack>;