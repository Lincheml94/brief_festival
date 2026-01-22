import { use } from "react";
import type { Artist } from "../../../../modele/artist";
import type * as admin_artist_param from "../../../models/params/artist_details_params";
import ArtistAPiService from "../../../services/artist_api_service";
import type { Programmation } from "../../../../modele/programmation";
import ProgrammationApiService from "../../../services/programme_api_service";
import AdminArtistFormValidator from "../../../validator/admin_artist_form_validator";
import AdminArtistFormContent from "../../../components/admin/admin_artist_form_content";

const AdminArtistForm = ({ params }: admin_artist_param.AdminArtistParams) => {
    // récupérer la variable d'URL
    // décomposition / déconstruction d'un objet
    const { id } = params;

    // récupérer les données à mettre à jour
    let dataToUpdate: Artist | undefined; 
    console.log(dataToUpdate);

    // si un identifiant est présent dans l'URL
    if (id) {
        // la méthode then équivaut à await : then
       dataToUpdate = use(new ArtistAPiService().selectOne(id)).data as Artist; 
    }
    // récupérer les catégories 

    const programmations = use(new ProgrammationApiService().selectAll()).data as Programmation[];

   
   

    return  (
        <>
            
            <AdminArtistFormContent dataToUpdate={dataToUpdate} programmations={programmations} validator={ new AdminArtistFormValidator().validate } />
                
                
        </>
      )
}

export default AdminArtistForm;
