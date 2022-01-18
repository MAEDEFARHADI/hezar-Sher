import styles from "./homePage.module.css"
import 'bootstrap/dist/css/bootstrap.css';
import bookmg from "../../assets/image/bookmg.png";
import tarh1 from "../../assets/image/tarh1.png";
function HomePage() {

    return (
        <div className="main">
        <div className={styles.container}>
            <div  style={{padding:" 0 70px"}}>
                <div style={{height : '100px'}}></div>
                {/* <div className={styles.header}>
                    {/* <Link to="/#">
                        {/* <img src={logo} alt="لوگوی هزار شعر" /> 
                    </Link>
                    <Navbar />
                </div> */}
                <div className={styles.img_right}>
<img  src={bookmg}/>
                </div>
                <div className={styles.text_right}>
                <p>
                            تاریخ کهن ایران زمین با پیشینه ای غنی از فرهنگ و
                            هنر، از دیرباز با شعر و ادبیات درهم پیچیده و ایران،
                            مهد پرورش شاعران بزرگی بوده و در گیر و دار فراز و
                            نشیب هایی که در طول تاریخ بر آن گذشته، اما شاهنامه
                            وزین پارسی پرور فردوسی بزرگ، اشعار روح بخش مولانا و
                            عشق بازی اش با حق، غزل های عاشقانه و عارفانه عالم
                            گیر در دیوان حافظ، اندیشه ژرف و عرفان ناب عطار
                            نیشابوری همه و همه همچون مرهمی بر زخم های کوچک و
                            بزرگش تسکین داده اند.
                        </p>
                </div>
                <div>
                    <img  src={tarh1} className={styles.vector}/>
                </div>
                <div>

                </div>
                <div className={styles.section}>
                    {/* <img src={gathering} alt="نقاشی" /> */}
                    <div className={styles.description}>

                        <div>
                            {/* <Button
                                type="primary"
                                title="فال حافظ"
                                onClick={() => {
                                    navigate(faal);
                                }}
                            />
                            <Button
                                type="primary"
                                title="گنجینه اشعار"
                                onClick={() => {
                                    navigate(ganjineh);
                                }}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className={styles.blocks} src={blocks} alt="طرح مشبک" /> */}
        </div>
        </div>
    );
                        }
export default HomePage;