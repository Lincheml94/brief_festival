import style from "../assets/css/button.module.css";

const Newsletter = () => {
	// const handleClick = () => {
	// 	console.log("clic");
	// };
	return (
		<div className={style.button}>
			{/* évenement */}
            <button type="button">
                {/* onClick={handleClick} */}
				NEWSLETTER
			</button>
		</div>
	);
};

export default Newsletter;
