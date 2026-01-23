import { Link } from "react-router";
import style from "../assets/css/button.module.css";

const Billetterie = () => {
	
	return (
		<div className={`${style.button} ${style.buttonbilletterie}`}>
			
            <div className={style.button}>
	
							<Link to = {"/artist"}><p>BILLETTERIE</p></Link>
					</div>
		</div>
	);
};

export default Billetterie;
