
import type { ArtistListItemProps } from '../../models/props/artist_list_item_props';
import style from "../../assets/css/artist_list.css"
import { Link } from 'react-router';
const ArtistList = ({ data }: ArtistListItemProps) => {
   
    
    return (
        <>
         {data.map(item => (
             <div className={"artist-card"}>
            <Link to={`/artist/${item.id}`} className="artist-card-link">
                <div className="artist-card-content">
                 <h3>{item.name}</h3>
                  </div>
             </Link>
     </div>
 ))}
 </>

    );
}
export default ArtistList;