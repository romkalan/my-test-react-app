import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import classNames from "classnames";
import styles from "./styles.module.scss";

function Layout({children}) {
    return (
        <div className={classNames(styles.root)}>
            <Header isHiglighted/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;
