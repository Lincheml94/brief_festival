import { FaHouse } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router";

const AdminLayout = () => {

    return <>
        <NavLink to={"/"}><FaHouse/></NavLink>
        <Outlet />
    </>

}

export default AdminLayout