import { NavLink } from "react-router"
import { FaRegUserCircle } from "react-icons/fa";
import style from "../assets/css/button.module.css"

const Login = () => {
    return <>
        <NavLink to={"/admin/"}><FaRegUserCircle className={style.iconlogin}/></NavLink>
    </>

}

export default Login;