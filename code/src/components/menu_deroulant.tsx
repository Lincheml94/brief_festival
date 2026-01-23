"use client";
import styles from "../assets/css/menu_deroulant.module.css"
import { useState } from "react";
import { NavLink } from "react-router";
import ButtonMenu from "./button_menu";
import { FaRegUserCircle } from "react-icons/fa";
import Login from "./login";
import Reseaux from "./reseaux-sociaux";


const MenuDeroulant = () => {
	// créer un état : hook use State
	// const navMobileIsVisible:boolean = false;
	const [navMobileSIsVisible, setnavMobileSIsVisible] =
		useState<boolean>(false);

	// gestionnaire d'évènement

	const handleClic = () => {
		// modifier la valeur de l'état : utiliser obligatoirement le setter de l'état
		//  ! : négation, donc !navMobileSIsVisible : on va aller chercher la valeur contraire du boolean
		setnavMobileSIsVisible(!navMobileSIsVisible);
		// console.log(navMobileSIsVisible);
		
		
	};

	return (
        <div className={styles.navbar}>
            <div className={styles.icons}>
				<div className={styles.contenant_bouton} onClick={handleClic}><ButtonMenu /></div>
            </div>

			<nav
				className={`${styles.menu} ${navMobileSIsVisible ? styles["navbar-mobile-visible"] : ""}`}
            >
                
				<NavLink className={styles.list} onClick={handleClic} to={"/"}>PROGRAMMATION 2026</NavLink>
				<NavLink className={styles.list} onClick={handleClic} to={"/"}>BILLETTERIE</NavLink>
				<NavLink className={styles.list} onClick={handleClic} to={"/artist"}>ARTISTES</NavLink>
				<NavLink className={styles.list} onClick={handleClic} to={"/"}>INFOS PRATIQUES</NavLink>
				<NavLink className={styles.list} onClick={handleClic} to={"/"}>LE FESTIVAL</NavLink>
				<NavLink className={styles.list} onClick={handleClic} to={"/"}>ACCESSIBILITE</NavLink>
				<NavLink className={styles.list} onClick={handleClic} to={"/"}>FOODTRUCKS</NavLink>
				<NavLink className={styles.list} onClick={handleClic} to={"/"}>ATELIERS</NavLink>
				<NavLink className={styles.list} onClick={handleClic} to={"/"}>NOS PARTENAIRES</NavLink>
				<Reseaux />
				
			</nav>
        </div>
        
	);
};

export default MenuDeroulant;