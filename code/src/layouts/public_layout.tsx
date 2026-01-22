import { Outlet } from "react-router";
import Header from "../components/header";
// import Content from "../components/content_accueil";


const PublicLayout = () => {
	return (
		<>
			{/* uniquement des composants */}
			{/* lien d'évitement */}

			<Header />
			
            {/* footer */}
            {/* <Content /> */}
			{/* contenu de la page enfant : outlet */}
			<Outlet />
		</>
	);
};

export default PublicLayout;