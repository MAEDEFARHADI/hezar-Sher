import styles from "./sher.module.css";
function Sher (props){
    const { title, dobeyti } = props;

    return (
        <div className={styles.poemContainer}>
                    <p className={styles.title}>{title}:</p>
                    <div className={styles.poem}>
                        {dobeyti.map((couplet, coupletIndex) => {
                            return (
                                <div
                                    key={`couplet-${coupletIndex}`}
                                    className={styles.couplet}
                                >
                                    {couplet.map((verse, verseIndex) => {
                                        return (
                                            <div
                                                key={`verse-${coupletIndex}-${verseIndex}`}
                                                className={styles.verse}
                                            >
                                                {verse}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>{" "}
        </div>
    );
}
export default Sher;