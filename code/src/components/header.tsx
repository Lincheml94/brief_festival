import style from "../assets/css/header.module.css";
import Billetterie from "./button_billetterie";
import Newsletter from "./button_newsletter";
import Reseaux from "./reseaux-sociaux";
import MenuDeroulant from "./menu_deroulant";
import { IoTicketOutline } from "react-icons/io5";
import Login from "./login";

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.left}>
				<Newsletter displayFooter={ false }/>
				<Reseaux />
			</div>
			<div className={style.right}>
				<Login />
				<Billetterie />
				<IoTicketOutline className={style.ticket}/>
			<MenuDeroulant />
			</div>
		</header>
	);
};
export default Header;
