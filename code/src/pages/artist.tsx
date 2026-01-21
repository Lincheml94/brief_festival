import type { Artist } from "../../modele/artist";
import ArtistDetailsContent from "../components/artist_details_content";
import Seo from "../components/seo";
import type { ArtistDetailsParams } from "../models/params/artist_details_params";
import { use } from "react";
import ArtistAPiService from "../services/artist_api_service";

const ArtistList = () => {
    // récupérer l'identifiant dans le parametres
    // déconstrucation d'un objet permet de creer des varaiables pour chaque propriete d'un objet

    // console.log(id);
    // recuperer les donnees

    const results = use(new ArtistAPiService().selectAll());

console.log(results);

    return (
        <>
            <h1>coucou</h1>
            {/* <ArtistDetailsContent data={results.data as Artist} /> */}
        </>
    );
};
export default ArtistList;