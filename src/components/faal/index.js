import{routes} from "../../routing/routes";
import Button from "../button";
import Sher from "../sher";
import styles from "./faal.module.css";


function Faal(props)
{
    const { title, dobeyti, voice, tafsir } =
        props;
            const { home } = routes;

    return (
        <div className={styles.container}>
                     <div className={styles.dobeyti}>
                         <Sher title={title} dobeyti={dobeyti} />
                         <audio src={voice} controls></audio>

                    </div>
                    <div className={styles.tafsirMain}>
                        <p className={styles.title}>ای صاحب فال:</p>
                        <p className={styles.tafsir}>
                            {tafsir}
                        </p>
                    </div>
                    <Button
                        text="بازگشت به صفحه اصلی"
                        Classname = "back-btn" 
                        onClick={()=> window.open(home, "_self")}                        
                    />
        </div>
    );
}
export default Faal;
