import type { ArtistDetailsContentProps } from "../../models/props/artist_details_content_props";

const ArtistDetails = ({ data }: ArtistDetailsContentProps) => {
	return (
		<article>
			<h2> {data.name}</h2>
			<h3>{ data.bio}</h3>
		</article>
	);
};
export default ArtistDetails;