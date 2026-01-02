import { Outlet } from "react-router";
import Content from "../components/content";
// import Content from "../components/content_accueil";


const PublicLayout = () => {
	return (
		<>
			{/* uniquement des composants */}
			{/* lien d'évitement */}

			{/* header */}
			
            {/* footer */}
            <Content />
			{/* contenu de la page enfant : outlet */}
			<Outlet />
		</>
	);
};

export default PublicLayout;