export function Carousel({children,className}){
    return(
        <div className="carousel-container">
           <div className={`carousel ${className}`}>
               <div className="slider-left">
                   <i class="uil uil-angle-left-b"></i>
                   </div>

                   <div className="carousel-body">
                     {children}
                   </div>
                   
               <div className="slider-right">
                 <i class="uil uil-angle-right-b"></i>
               </div>
           </div>
        </div>
    )
}