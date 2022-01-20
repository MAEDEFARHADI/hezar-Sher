import{routes} from "../../routing/routes";
import GetAshaarApi from "../../hooks/GetAshaarApi";
import styles from "./shaer.module.css";
import tarh4 from "../../assets/image/tarh4.png";
import Refresh from "../../assets/image/refresh.png";

import { useParams } from "react-router-dom";
import GetSherApi from "../../hooks/GetSherApi"
import Sher from "../../components/sher";
function Shaer() {
    const { id } = useParams();
    const {
        name,
        refresh,
        image,
        title,
        dobeyti,
        info,
    } = GetSherApi(id);
    return (
        <div className={styles.main}>
 <div className={styles.imgTop}>
     <img  src={tarh4}/>
 </div>
 <div className={styles.sherBox}>
     <div className={styles.leftBox}>
                <img className={styles.shaerImage} src={image} alt={name} />
                <div className={styles.poe}>
                    <Sher title={title} dobeyti={dobeyti} />
                </div>
                <div
                    className={styles.refreshButton} onClick={refresh}
                >
                </div>
                <div
                    className={styles.refreshBtn}
                    onClick={refresh}
                >
                    <img src={Refresh} alt="از نو" />
                </div>
     </div>
     <div className={styles.rightbox}>{info}</div>
 </div>
        </div>
        
    );
}

export default Shaer;
