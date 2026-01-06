"use client";
import styles from "../assets/css/menu_deroulant.module.css"
import { useState } from "react";
import { NavLink } from "react-router";
import ButtonMenu from "./button_menu";


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
			    <button type="button" onClick={handleClic}><ButtonMenu /></button>
            </div>

			<nav
				className={`${styles.menu} ${navMobileSIsVisible ? styles["navbar-mobile-visible"] : ""}`}
            >
                
				<NavLink className={styles.list} to={"/"}>PROGRAMMATION 2026</NavLink>
				<NavLink className={styles.list} to={"/"}>BILLETTERIE</NavLink>
				<NavLink className={styles.list} to={"/"}>INFOS PRATIQUES</NavLink>
				<NavLink className={styles.list} to={"/"}>LE FESTIVAL</NavLink>
				<NavLink className={styles.list} to={"/"}>ACCESSIBILITE</NavLink>
				<NavLink className={styles.list} to={"/"}>FOODTRUCKS</NavLink>
				<NavLink className={styles.list} to={"/"}>CAMPER AU FESTIVAL</NavLink>
				<NavLink className={styles.list} to={"/"}>ATELIERS</NavLink>
				<NavLink className={styles.list} to={"/"}>NOS PARTENAIRES</NavLink>
			</nav>
        </div>
        
	);
};

export default MenuDeroulant;