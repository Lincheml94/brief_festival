import { z, type ZodError } from "zod";
import type { Artist } from "../../modele/artist";

class AdminArtistFormValidator{

    // validation des données du formulaire
    public validate = async (data: Partial<Artist>): Promise<Partial<Artist> | ZodError> => {
        // la méthode doit être exécutée côté serveur
        "use server";
        
        // contraintes de validation
        // union permet de donner deux types (nécessaire pour id, et pour image)
        const constraints = z.object({
            id: z.union([
                z.string().nullable(),
                // coerce : transtyper
                z.coerce
                    .number()
                    .positive(),
            ]),
            name: z
                .string("Le nom est obligatoire")
                .max(100, "Le nom doit comporter au maximum 100 caractères"),
        
            bio: z  
                .string("la bio est obligatoire")
                .max(300, "La bio doit comporter au maximum 300 caractères"),
        
           
            image: z.union([
                z.string("ce champ est obligatoire - zod3").nullable(),
                z.file("ce champ est obligatoire - zod"),
            ]),

            video: z.union([
                z.string("ce champ est obligatoire - zod3").nullable(),
                z.file("ce champ est obligatoire - zod"),
            ]),
        });
        
        // validation de la saisie du formmulaire
        const validation = await constraints.safeParseAsync(data);

        // si la validation échoue
        if (!validation.success) {
            return validation.error;
        }
        // si la validation réussi
            return validation.data as Partial<Artist>;
    };

}

export default AdminArtistFormValidator;