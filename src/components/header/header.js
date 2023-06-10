import logo from "../../assets/logo.png";
import headerBg from "../../assets/header-bg.png";

export function Header(){
    return(
        <header className="home-header">
         {/* <div className="shadow">
          <svg width="444" height="678" viewBox="0 0 444 678" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g opacity="0.3" filter="url(#filter0_f_4_12)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M301.209 352.001C290.173 386.669 264.914 413.19 242.037 441.462C222.326 465.821 201.32 487.535 176.292 506.373C148.414 527.356 122.122 556.558 87.2732 557.946C52.3115 559.339 22.9507 533.407 -5.93251 513.634C-33.0888 495.044 -52.4251 469.427 -75.8344 446.286C-107.874 414.612 -163.167 396.642 -169.434 352.001C-175.493 308.845 -131.511 275.35 -104.647 241.061C-80.8376 210.671 -54.2616 183.755 -21.5624 163.262C12.0146 142.219 48.0816 115.019 87.2732 120.785C126.401 126.54 143.038 176.499 179.088 192.779C221.116 211.758 283.755 185.58 311.836 222.192C338.703 257.222 314.604 309.919 301.209 352.001Z" fill="#82FFE8"/>
              </g>
            <defs>
            <filter id="filter0_f_4_12" x="-290" y="0" width="734" height="678" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
               <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
               <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_4_12"/>
             </filter>
            </defs>
          </svg>
          </div>
          //////////////////////////////////
          this is the shadow in header in figma 
    */}
            <div className="bg">
               <img src={headerBg} alt="" />
            </div>
            <div className="container">
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
            </div>
        </header>
    )
}