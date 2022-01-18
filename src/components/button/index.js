import styles from "./button.module.css";

function Button(props) {
    const {Classname , type, onClick, text, disabled } = props;

    return (
        <button className={styles[Classname]} type={type} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
