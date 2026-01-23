import { NavLink } from "react-router"
import { FaRegUserCircle } from "react-icons/fa";

const Login = () => {
    return <>
        <NavLink to={"/admin/"}><FaRegUserCircle /></NavLink>
    </>

}

export default Login;