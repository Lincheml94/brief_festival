import { Outlet } from "react-router";
import Content from "../components/content";
import Header from "../components/header";
import Footer from "../components/footer/footer";
// import Content from "../components/content_accueil";


const PublicLayout = () => {
	return (
		<>
			{/* uniquement des composants */}
			{/* lien d'évitement */}

			<Header />
			
           
			<Outlet />
			<Footer />
			
		</>
	);
};

export default PublicLayout;