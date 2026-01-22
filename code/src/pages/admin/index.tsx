import { Link } from "react-router";
import AdminArtistHomeContent from "../../components/admin/admin_book_home_content";
import style from "../../assets/css/admin.artist.module.css"



const AdminHomePage = () => {
    return <>
       
        <h1 className={style.titredashboard}>Dashboard</h1>
        <AdminArtistHomeContent />
    </>
}

export default AdminHomePage;