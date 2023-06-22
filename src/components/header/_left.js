import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';
import four from '../../assets/four.png';
export function Left(){
    return(
        <div className="left">
          <div className="wrapper">
           <h1>
               Find The Place To
              Live Your Dreams
               Easily Here
          </h1>
        <p>
          Everything you need about finding your place to live will
           be here, where it will be easier for you
          </p>
        <div className="search rounded ">
          <button className="">
          <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0C11.3869 0 13.6761 0.993372 15.364 2.76159C17.0518 4.5298
             18 6.92801 18 9.42865C18 13.934 15.0975 18.081 9.402 21.8776C9.28181 21.9575
              9.14237 22 9 22C8.85763 22 8.71819 21.9575 8.598 21.8776C2.9025 18.081 0 13.934 0 9.42865C0 6.92801
             0.948211 4.5298 2.63604
            2.76159C4.32387 0.993372 6.61305 0 9 0ZM9 6.28576C8.20435 6.28576 7.44129 6.61689 6.87868
            7.20629C6.31607 7.7957 6 8.5951 6 9.42865C6 10.2622 6.31607 11.0616 6.87868 11.651C7.44129 12.2404
             8.20435 12.5715 9 12.5715C9.79565 12.5715 10.5587 12.2404 11.1213 11.651C11.6839 11.0616 12 10.2622
             12 9.42865C12 8.5951 11.6839 7.7957 11.1213 7.20629C10.5587
             6.61689 9.79565 6.28576 9 6.28576Z" fill="#F59E0B"/>
         </svg>

          </button>
          <input type="text" name="search" placeholder="search Location" />
          <button className="btn btn-green rounded">
            search
            </button>
        </div>
      </div>
     <div className="wrapper-2">
        <p>Our Partnership</p>
        <div>
          <img src={one} alt="" />
          <img src={two} alt="" />
          <img src={three} alt="" />
          <img src={four} alt="" />
        </div>
    </div>
      </div>
    )
}