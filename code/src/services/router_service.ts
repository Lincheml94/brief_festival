import type { unstable_RSCRouteConfig as RSCRouteConfig } from "react-router";

class RouterService {
	public getRouter = () => {
		return [
			{
				// identifiant unique de la mise en page
				id: "root",
				// préfixe des routes
				path: "",
				// importation de la mise en pageparente
				lazy: () => import("../layouts/root_layout"),

				children: [
					{
						id: "admin",
						path: "admin",
						lazy: () => import("../layouts/admin_layout"),

						children: [
							{
								id: "dashboard",
								path: "",
								index: true,
								lazy: () => import("../pages/admin/index"),
							},
							{
								id: "artist_form",
								path: "book_form/:id?",
								lazy: () => import("../pages/admin/artist/admin_artist_form"),
							},
					]},
					{
						id: "public",
						path: "",
						lazy: () => import("../layouts/public_layout"),

						children: [
							{
								id: "home",
								// premiere route de notre app : index
								index: true,
								path: "",
								lazy: () => import("../pages/index"),
							},
							{
								id: "artist",
								path: "artist",
								lazy: () => import("../pages/artist"),
							},
							{
								id: "artist_details",
								
								path: "artists/:id",
								lazy: () => import("../pages/artist_details"),
							},
						],
					},
				],
			},
		] satisfies RSCRouteConfig;
	};
}

export default RouterService;