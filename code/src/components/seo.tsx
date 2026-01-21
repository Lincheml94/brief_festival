import type { SeoProps } from "../models/props/seo_props";

const Seo = ({ title, description, url }: SeoProps) => {
	return (
		<>
			{/* 50 caractéres au maximum */}
			<title>{`joyfest - ${title}`}</title>
			{/* 150 caractére au maximum */}
			<meta name="description" content={`joyfest - ${description}`} />
			{/* open Graph */}
			<meta property="og:title" content={`joyfest - ${title}`} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`https://joyfest.com${url}`} />
			{/* 1200x630 */}
			<meta property="og:description" content={`joyfest - ${description}`} />
			<meta property="og:image" content="https://joyfest.com/img/og_banner.png" />

			{/* twitter cards */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={`joyfest - ${title}`} />
			<meta name="twitter:description" content={`joyfest - ${description}`} />

			{/* image carrée */}
			<meta
				name="twitter:image"
				content="https://joyfest.com/img/twitter_card.png"
			/>
		</>
	);
};

export default Seo;