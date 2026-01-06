import style from "../assets/css/header.module.css";
import Billetterie from "./button_billetterie";
import Newsletter from "./button_newsletter";
import Reseaux from "./reseaux-sociaux";
import MenuDeroulant from "./menu_deroulant";

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.left}>
				<Newsletter />
				<Reseaux />
			</div>
			<Billetterie />
			<MenuDeroulant />
		</header>
	);
};
export default Header;
