import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "../components/header/header";
import { AppRoutes } from "../routers/Router";

export function ReactRoot(){
  return(
   <Router>
    <Header />
      <AppRoutes />
   </Router>
  )
}