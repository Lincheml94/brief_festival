
import { FaInstagram, } from 'react-icons/fa';
import { TiSocialFacebookCircular } from "react-icons/ti";
import { RiTiktokLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import style from "../assets/css/reseaux.module.css"

const Reseaux = () => {
    return (

        <div className={style["social-icons"]}>
           <a href="http://https://www.instagram.com/">
                <FaInstagram />
            </a>
          <a href="http://https://www.tiktok.com/">
                <RiTiktokLine />
               </a>
          <a href="http://www.facebook.com/">
                <TiSocialFacebookCircular className={style["icon-facebook"]} />
            </a>
            <a href="https://x.com/">
                <FaXTwitter />
                </a>
        </div>
        
    );

};
export default Reseaux