
import type { ZodError } from "zod";
import type { Artist } from "../../../../modele/artist";
import type { Programmation } from "../../../../modele/programmation";

type AdminArtistFormContentProps = {
    programmations: Programmation[];
    validator: (data: Partial<Artist>) => Promise<Partial<Artist> | ZodError>;
    dataToUpdate: Artist | undefined;
}

export type { AdminArtistFormContentProps };