"use client";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import type { AdminArtistParams } from "../../../models/params/admin_artist_params";
import ArtistAPiService from "../../../services/artist_api_service";

const AdminBookDelete = ({ params }: AdminArtistParams) => {
    const { id } = params;
    console.log(id)
  
    // useNavigate permet de créer une redirection
    const navigate = useNavigate();
    // Pré remplir le formulaire avant l'affichage du composant
    useEffect(() => {
        new ArtistAPiService().delete({ id: id }).then(() => {
            navigate("/admin");
            return;
        });

        }, [id, navigate])

    return (
        <>
            <title>Gestion des artistes</title>
        

        </>
    )

}

export default AdminBookDelete