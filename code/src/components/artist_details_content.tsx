import type { ArtistDetailsContentProps } from "../models/props/artist_details_content_props";

const ArtistDetailsContent = ({ data }: ArtistDetailsContentProps) => {
	return (
		<article>
			<h2> {data.name}</h2>
		</article>
	);
};
export default ArtistDetailsContent;