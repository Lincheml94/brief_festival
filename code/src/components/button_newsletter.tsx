
// import { BsGoogle } from "react-icons/bs";
import style from "../assets/css/button.module.css";
import { Link } from "react-router";

const Newsletter = () => {
	// const handleClick = () => {
	// 	console.log("clic");
	// };
	return (
		<div className={style.button}>
			{/* évenement */}
				<Link to = {"https://www.rockenseine.com/"}><p>NEWSLETTER</p></Link>
		</div>
	);
};

export default Newsletter;
