import styles from "./fal.module.css";
import Button from "../../components/button";
import{routes} from "../../routing/routes";
import Faal from "../../components/faal";
import GetFaalApi from "../../hooks/getFallApi";
function Fal() {
    const { home } = routes;
    const { title, dobeyti, voice, tafsir } = GetFaalApi();
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Faal
                title={title}
                dobeyti={dobeyti}
                voice={voice}
                tafsir={tafsir}
                />
            </div>
        </div>
    );
}

export default Fal;
