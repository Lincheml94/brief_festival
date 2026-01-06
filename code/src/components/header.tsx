import style from "../assets/css/header.module.css";
import Billetterie from "./button_billetterie";
import Newsletter from "./button_newsletter";
import Reseaux from "./reseaux-sociaux";

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.left}>
				<Newsletter />
				<Reseaux />
			</div>
			<Billetterie />
		</header>
	);
};
export default Header;
