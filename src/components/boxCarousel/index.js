import { Link } from "react-router-dom";
import styles from "./boxCarousel.module.css";
function BoxCarousel(props) {
    const { link, imageURL, title } = props;

    return (
        <Link to={link} target="_blank">
            <div className={styles.container}>
                <img src={imageURL} alt={title} />
                <p>{title}</p>
            </div>
        </Link>
    );
}

export default BoxCarousel;
