import{routes} from "../../routing/routes";
import styles from "./faal.module.css";
import Button from "../button";


function Faal(props)
{
    const { home } = routes;

    return (
        <div className={styles.container}>
                    <div className={styles.sher}>

                    </div>
                    <div className={styles.tafsir}>
                        <p className={styles.title}>ای صاحب فال:</p>
    
                    </div>
                    <Button
                        text="بازگشت به صفحه اصلی"
                        Classname="back-btn"
                        onClick={()=> window.open(home, "_self")}
                        />
        </div>
    );
}
export default Faal;
