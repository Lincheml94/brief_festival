import type { ArtistDetailsContentProps } from "../models/props/artist_details_content_props";
import style from "../assets/css/artist_details_content.module.css"
const ArtistDetailsContent = ({ data }: ArtistDetailsContentProps) => {
	return (
	<div className={style.card}>
			
			<div className={style["card-info"]}>
				<img src={`/images/${data.image}`} />
				<h1>{data.name}</h1>
				<h5>{data.bio}</h5>
				<h5>{data.video}</h5>
				
				
			</div>
		</div>
	);
};
export default ArtistDetailsContent; 