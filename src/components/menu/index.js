import { Link } from "react-router-dom";
import {routes} from "../../routing/routes";
import styles from "./menu.module.css"
import logo from "../../assets/image/logo.png";

function Menu() {
    const { fal, ganjine } = routes;

    return (
        <ul className={styles.container}>
            <img src={logo}/>
            <Link to={fal}>فال حافظ</Link>
            <Link to={ganjine}>گنجینه اشعار</Link>
            <Link to={ganjine}>درباره ما</Link>
        </ul>
    );
}

export default Menu;
