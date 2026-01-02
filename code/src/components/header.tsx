import style from "../assets/css/header.module.css";
import Newsletter from "./button_newsletter";

const Header = () => {
	return (
		<header className={style.header}>
			<Newsletter />
		</header>
	);
};
export default Header;
