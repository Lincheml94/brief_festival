"use client";
import { useEffect, useId, useState } from "react";
import { useNavigate } from "react-router";
import type { Artist } from "../../../modele/artist";
import type { AdminArtistFormContentProps } from "../../models/props/admin/admin_artist_form_content_props";
import ArtistAPiService from "../../services/artist_api_service";
import { useForm } from "react-hook-form";
import type { ZodIssue } from "zod"
import style from "../../assets/css/admin.artist.module.css"


const AdminArtistFormContent = ({ programmations, validator, dataToUpdate }: AdminArtistFormContentProps) => {
//     // créer de identifiants pour chaque champs de formulaire
    const idId = useId();
    const nameId = useId();
    const bioId = useId();
    const imageId = useId();
    const videoId = useId();
    

    // useNavigate permet de créer une redirection
    const navigate = useNavigate();

    // stocker les messages d'erreur de validation côté serveur
    const [serverErrors, setServerErrors] = useState<Partial<Artist>>();

    const [message, setMessage] = useState<string>("");

    /*
       react hook form 
       register : 
           -remplace l'attribut name
           - permet de référencer un champ de saisie 
       handleSubmit : permet de gérer la soumission des formulaires
       reset :permet de pré-remplir les formulaires
           */
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Partial<Artist>>();
    
    // Pré remplir le formulaire avant l'affichage du composant
    useEffect(() => {
        if (dataToUpdate) {

            // normaliser les données saisies : se base sur les données testées dans flashport pour que les données (pour les cases à cocher)
            const normalizeData = {
                ...dataToUpdate,
                programmation_ids: (dataToUpdate.programmation_ids as string).split(","),
            };
            reset(normalizeData);
        }
        
    }, [dataToUpdate, reset])

    // soumission du formulaire
    // data stocke la saisie du formulaire
    const submitForm = async (data: Partial<Artist>) => {

        // normaliser les données saisies : se base sur les données testées dans flashport pour que les données
        const normalizeData = {

            ...data,
            programmation_ids: (data.programmation_ids as unknown as string[]).join(),
            image: (data.image as string)[0],
        };

        // validation de la saisie avec le validateur côté serveur
        const validation = await validator(normalizeData);
        // console.log(validation);
    
        // si la validation échoue
        if (validation instanceof Error) {
            // stocker les messages d'erreur
            let errors = {};
            // récupérer les messages d'erreur
            (JSON.parse(validation.message) as ZodIssue[]).map((item) => {
                errors = { ...errors, [item.path.shift() as string]: item.message };
                return errors;
            });

            // définir l'état affichant les messages d'erreur côté serveur
            setServerErrors(errors);
            // stopper l'exécution du script
            return;
        
        }
        
        // Si la validation réussi
        // si le formulaire contient un champ de fichier : envoyer vers l'API un objet de type formData
        // formData : clé / valeur
        const formData = new FormData();
        // reprendre strictement le nom du champ du formulaire testé avec flashpost
        formData.set("id", normalizeData.id as unknown as string)
        formData.set("name", normalizeData.name as unknown as string)
        formData.set("bio", normalizeData.bio as unknown as string)
        formData.set("image", normalizeData.image as unknown as string)
        formData.set("video", normalizeData.video as unknown as string)
        formData.set("programmation_ids", normalizeData.programmation_ids as string)
        
        //    requête HTTP vers l'API
        const process = dataToUpdate
            ? await new ArtistAPiService().update(formData)
            : await new ArtistAPiService().insert(formData)
        
        // Si la requête HTTP a réussi : l'utilisateur.ice a ajouté un livre et est redirigé vers une autre page
        // use navigate : hook qui permet de naviguer
        if ([200, 201].indexOf(process.status) !== -1) {
            // redirection
            navigate("/admin");
        } else if ([400].indexOf(process.status) !== -1) {
            // afficher un message
            setMessage(process.message as unknown as string);
        }
    };

     return <>
        <div>
            <h2>Gérer les artistes</h2>
            {/* afficher le message (type de condition supportée par le html) 
                Si le message existe, l'afficher, sinon, rien de s'affiche
            */}
            {
                message ? <p role="alert">{ message }</p> : null
            }

        {/* si le formulaire contient un champ de fichier : 
                - ajouter attribut enctype=" multipart/form-data"
                - pour les champs relation :
                    FK : pour les clés étrangères, créer soit une liste déroulante <select>, soit bouton radio : sélection d'un seul choix
                    table de jointure : cases à cocher : sélectionner plusieurs choix
                */
                
            }
             <form className={style.formdata} encType="multipart/form-data" onSubmit={handleSubmit(submitForm)}>
                
            {/* NAME */}
            <p>   
            <label htmlFor={nameId}>Nom de l'artiste</label>
                    <input type="text"
                        id={nameId}
                        {...register('name', {
                            required: "Le nom est obligatoire",
                            maxLength: { value: 100, message: "Le nom doit comporter au maximum 100 caractères" }
                        })} />

                    {/*afficher les messages d'erreur : utiliser le name du champ défini dans register  */}
                </p> 
                <p role="alert">{ errors.name?.message ?? serverErrors?.name}</p>
                
                {/* BIO */}
                <p>
            <label htmlFor={bioId}>Bio de l'artiste</label>
                    <textarea id={bioId} {...register('bio', {
                        required: "la bio est obligatoire",
                        maxLength: { value: 300, message: "La bio doit comporter au maximum 300 caractères" }
                 
                    })} />
                </p> 
                 <p role="alert">{errors.bio?.message ?? serverErrors?.bio}</p>

                {/* IMAGE */}
                <p>
            <label htmlFor={imageId}>Charger une image</label>
                    <input type="text" id={bioId} {...register('image', {
                        required: "la bio est obligatoire",
                        maxLength: { value: 100, message: "Le nom doit comporter au maximum 100 caractères" }
                 
                    })} />
                </p> 
                 <p role="alert">{errors.image?.message ?? serverErrors?.image}</p>

                {/* VIDEO */}
                <p>
            <label htmlFor={videoId}>Charger une vidéo</label>
                    <input type="text" id={videoId} {...register('video', {
                        required: "la video est obligatoire",
                        maxLength: { value: 100, message: "Le nom doit comporter au maximum 100 caractères" }
                 
                    })} />
                </p> 
                 <p role="alert">{errors.video?.message ?? serverErrors?.video}</p>

                 {/* ID HIDDEN */}
                <input type="hidden" id={idId} {...register('id')}/>
            

            {/* PROGRAMMATION  */}
            <div>
                <p>Programmation :</p>
                {
                    programmations.map((item) => {
                        return (
                            <div key={item.id}>
                                <input type="checkbox" value={item.id} id={item.id as unknown as string}
                                    
                                    {...register("programmation_ids", {
                                        required: "cochez au moins une case",

                                    })} />
                                
                                <label>date :{item.date} </label>
                                <label>heure : {item.hours}</label>
                                <p role="alert">{ errors.programmation_ids?.message ?? serverErrors?.programmation_ids}</p>
                            </div>
                        )
                    })
                }
                 </div>
                  <button type="submit">Créer</button>

               
             </form>
             </div>
             </>
}
             
export default AdminArtistFormContent;
