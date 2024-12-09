import { Link, Outlet} from "react-router-dom";

function Layout(props){
return(
    <>
       <body className="layoutBody"> 
       <nav>
            <Link to="/Planes" id='link'>Planes   </Link>
          </nav>
        <Outlet/>
        </body>
        </>
);
}
export default Layout