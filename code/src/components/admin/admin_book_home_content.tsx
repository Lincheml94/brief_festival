import { use } from "react";
import { Link } from "react-router";
import ArtistAPiService from "../../services/artist_api_service";
import style from "../../assets/css/admin.artist.module.css"

const AdminArtistHomeContent = () => {
    // récupération des menus
    const results = use(new ArtistAPiService().selectAll()).data;
    
    return <>
        <div className={style.artist_form}>
        <Link to={"/admin/artist_form"}>
            <button type="submit">AJOUTER UN NOUVEL ARTISTE</button>
        </Link>
    
        {/* Affichage des livres */}

        
        {results?.map((item) => {

            return (
                <div className={style.artistcrud} key={item.id}>
                    <p>{item.name}</p>
                    <div className={style.buttoncrud}>

                    <Link to={`/admin/artist_form/${item.id}`}>
                        <button type="submit">MODIFIER</button>
                    </Link>
                
                    <Link to={`/admin/artist_delete/${item.id}`}>
                        <button type="submit">SUPPRIMER</button>
                        </Link>
                        </div>

        
                
                </div>
            )
        })};
       
    </div>
    </>
}
        


export default AdminArtistHomeContent;