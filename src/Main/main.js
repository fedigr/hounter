import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Villa } from "../pages/villa";
export function ReactRoot(){
  return(
   <Router>
     <Routes>
      <Route path="/" element={<Home />}>

          <Route index path="villa" element={<Villa />} />
          <Route index path="apartment" element={<button className="btn btn-green rounded">hello</button>}/>

      </Route>
     </Routes>
   </Router>
  )
}