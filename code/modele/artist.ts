import type { programmation } from "./programation";

type artist = {
    id: number;
    name: string;
    bio: string;
    image: string;
    video: string;
    programmation_ids: string | string[];
    programmations: programmation[];


};
export type { artist };