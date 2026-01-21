import type { Artist } from "../../modele/artist";
import ArtistDetailsContent from "../components/artist_details_content";

import type { ArtistDetailsParams } from "../models/params/artist_details_params";
// import ArtistAPiService from "../services/artist_apiservice";
import { use } from "react";
import ArtistAPiService from "../services/artist_api_service";

const ArtistDetails = ({ params }: ArtistDetailsParams) => {
    // récupérer l'identifiant dans le parametres
    // déconstrucation d'un objet permet de creer des varaiables pour chaque propriete d'un objet

    const { id } = params;
    // console.log(id);
    // recuperer les donnees

    const results = use(new ArtistAPiService().selectOne(id));

    console.log(params);

    return (
        <>
            {/* <Seo
                title={results.data?.name as string}
                description="Artist  des"
                url={/artist/${id}}
            /> /}

            {/ <ArtistDetailsContent data={results.data as Artist} /> */}
			<ArtistDetailsContent data={results.data as Artist} />
        </>
    );
};
export default ArtistDetails;