import{routes} from "../../routing/routes";
import GetAshaarApi from "../../hooks/GetAshaarApi";
import styles from "./ganjine.module.css";
import tarh3 from "../../assets/image/tarh3.png";
import Carousel from "../../components/carousel";
function Ganjine() {
    const {ashaar} = GetAshaarApi();

    return (
        <div className={styles.main}>
<div className={styles.leftImage}>
<img  src={tarh3}/>
</div>
<div className={styles.rightImg}></div>
<div className={styles.asharCarousel}></div>   
<div className={styles.rowCarousel}>
<Carousel ashaar={ashaar} />

    </div> 
        </div>
        
    );
}

export default Ganjine;
