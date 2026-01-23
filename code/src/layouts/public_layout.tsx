import { Outlet } from "react-router";
import Header from "../components/header";
import Footer from "../components/footer/footer";
// import Content from "../components/content_accueil";


const PublicLayout = () => {
	return (
		<>
			{/* uniquement des composants */}
			{/* lien d'évitement */}

			<Header />
			
           
            {/* <Content /> */}
			{/* contenu de la page enfant : outlet */}
			<main className="container">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default PublicLayout;