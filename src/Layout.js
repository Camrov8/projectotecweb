import { Link, Outlet} from "react-router-dom";

function Layout(props){
return(
    <>
       <body className="layoutBody"> 
       <nav>
          <div className="linkPlanes">
            <Link to="/Planes" id='link'>
              <img src="/img/f22.jpg" alt="" height="100vh" width="200vw"/>
            </Link>
          </div>
        </nav>
        <Outlet/>
        </body>
        </>
);
}
export default Layout