import Newsletter from "../button_newsletter"
import Reseaux from "../reseaux-sociaux"
import TitreFooter from "./titre_footer"
import FooterFooter from "./footer_footer"
import style from "../../assets/css/footer.css"
import Sponsor from "./sponsor"

const Footer = () => {
    return <>
        
        <footer>
            <Sponsor />
            <TitreFooter />
            <Newsletter />
            <Reseaux />
            <FooterFooter />
        </footer>
    
    </>
}

export default Footer