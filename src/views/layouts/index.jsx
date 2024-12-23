import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Layout = ({films}) => {

    return (
        <div>
            <Header films={films}/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;