import type { Artist } from "./artist";

type Programmation = {
    id: number;
    hours: number;
    date: string;
    artist_ids: string | string[];
    artists: Artist[];


};
export type { Programmation };