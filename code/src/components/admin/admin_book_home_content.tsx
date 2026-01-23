import { use } from "react";
import { Link } from "react-router";
import ArtistAPiService from "../../services/artist_api_service";


const AdminArtistHomeContent = () => {
    // récupération des menus
    const results = use(new ArtistAPiService().selectAll()).data;
    
    return <>
        <Link to={"/admin/artist_form"}>
            <button type="submit">Ajouter un artiste</button>
        </Link>
    
        {/* Affichage des livres */}

        
        {results?.map((item) => {

            return (
                <div key={item.id}>
                    <p>{item.name}</p>

                    <Link to={`/admin/artist_form/${item.id}`}>
                        <button type="submit">Modifier un artiste</button>
                    </Link>
                
                    <Link to={`/admin/artist_delete/${item.id}`}>
                        <button type="submit">Supprimer un artiste</button>
                    </Link>

        
                
                </div>
            )
        })};
       
    
    </>
}
        


export default AdminArtistHomeContent;