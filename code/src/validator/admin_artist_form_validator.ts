import { type ZodError, z } from "zod";
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
            title: z
                .string("Le titre est obligatoire")
                .max(100, "un titre doit comporter au maximum 100 caractères"),
        
                
            price: z.coerce.number()
                .min(1, "le prix doit être de minimum 1 euro")
                .max(999.99, "le prix doit être de maximum 999,99 euros"),
           
            pages: z
                .string("le nombre de pages est obligatoire")
                .max(20, "le nombre de caractère est limité à 20"),
            dimensions: z
                .string("la dimension est obligatoire")
                .max(20, "le nombre de caractère est limité à 20"),
          
            images: z.union([
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