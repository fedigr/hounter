import { Header } from "../components/header/header";
import {Link, Outlet} from "react-router-dom";
export function Home(){
    return(
        <>
        <Header />
        <div className="container">
            <nav className="main-nav">
                {/*<div  className="nav-title">
                  <p>Our recommendation</p>
                  <h2>Featured House</h2>
                </div>
                */}
             <p className="main-nav-title">Our recommendation</p>
               <div className="nav-links">
                    <Link to="/" className="btn  rounded">home</Link>
                    <Link to="/villa" className="btn  rounded">Villa</Link>
                    <Link to="apartment" className="btn  rounded">apartment</Link>
               </div>

             </nav>
               <Outlet />
            </div>
        </>

    )
}