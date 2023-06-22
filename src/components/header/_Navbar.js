import logo from "../../assets/logo.png";
export function Navbar(){
    return(
      <nav className="navbar">
         <div className="navbar-brand">
            <img src={logo} alt="logo" />
         </div>
       <button className="navbar-toggle">
         <svg width="42" height="25" viewBox="0 0 42 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="7" y1="9.04346" x2="42" y2="9.04346" stroke="white" stroke-width="2"/>
            <line x1="12" y1="16" x2="42" y2="16" stroke="white" stroke-width="2"/>
            <line y1="1" x2="42" y2="1" stroke="white" stroke-width="2"/>
        </svg>
      </button>

      </nav>
    );
}