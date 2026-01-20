import type { Programmation } from "./programmation";

type Artist = {
    id: number;
    name: string;
    bio: string;
    image: string;
    video: string;
    programmation_ids: string | string[];
    programmations: Programmation[];

};
export type { Artist };