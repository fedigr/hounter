import {Routes , Route} from 'react-router-dom';
import  {Home} from "../pages/home";
export function AppRoutes(){
    return(
        <Routes>
            <Route exact  path='/' element={<Home />}>

             </Route>
       </Routes>
    )
}