import type { artist } from "./artist";

type programmation = {
    id: number;
    hours: number;
    date: string;
    artist_ids: string | string[];
    artists: artist[];


};
export type { programmation };