import { Link, Outlet} from "react-router-dom";

function Layout(props){
return(
    <>
       <nav>
            <Link to="/Planes">Planes   </Link>
          </nav>
        <Outlet/>
        </>
);
}
export default Layout