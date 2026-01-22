import { use } from "react";
import type { Artist } from "../../modele/artist"
import ArtistDetailsContent from "../components/artist_details_content"
import Seo from "../components/seo"
import ArtistAPiService from "../services/artist_api_service";

const Artists = () => {
	// console.log(id);
	// recuperer les donnees

	const results = use ( new ArtistAPiService().selectAll());

	console.log(results);

    return <>
				{/* <Seo
				title={results.data?.name as string}
				description="Artist _ des"
            url={`/artist/`}
            
			/>
			
			<ArtistDetailsContent data={results.data as Artist} /> */}
    </>

}

export default Artists