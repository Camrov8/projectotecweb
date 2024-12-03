import { Link, Outlet} from "react-router-dom";

function Layout(props){
return(
    <>
       <nav>
            <Link to="/Planes">Planes</Link>
            <Link to="/P1">Planes</Link>
             </nav>
        <Outlet/>
        </>
);
}
export default Layout