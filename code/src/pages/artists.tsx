import { use } from "react";
import type { Artist } from "../../modele/artist"
import ArtistAPiService from "../services/artist_api_service";
import ArtistList from "../components/page_artists/artist_list";


const Artists = () => {
	// console.log(id);
	// recuperer les donnees
	
	const results = use( new ArtistAPiService().selectAll());

	

	return (<>
		
		<ArtistList data={results.data as Artist[]} />
			
    </>
	);
};

export default Artists;