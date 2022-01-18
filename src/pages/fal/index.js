import styles from "./fal.module.css";
import Button from "../../components/button";
import{routes} from "../../routing/routes";
import Faal from "../../components/faal";
function Fal() {
    const { home } = routes;
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Faal />
            {/* <div>
                <Button 
                text = "بازگشت به صفحه اصلی"
                Classname = "back-btn" 
                onClick={()=> window.open(home, "_self")}
                />
            </div> */}
            </div>
        </div>
    );
}

export default Fal;
