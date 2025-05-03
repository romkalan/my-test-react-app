import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";

function Layout({children}) {
    return (
        <div>
            <Header isHiglighted/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;
