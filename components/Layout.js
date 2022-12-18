
import Navbar from "./Navbar";
import Banner from "./Banner";


const Layout = ({ children, noNavbar, noBanner }) => {
    return (
        <>
            {!noNavbar && <Navbar />}
            {!noBanner && <Banner />}
            <main>{children}</main>
        </>
    )
}

export default Layout
