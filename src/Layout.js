import { Link, Outlet} from "react-router-dom";

function Layout(props){
return(
    <>
       <body className="layoutBody"> 
       <nav>
       <p id="aviacao">Aviação</p><br/>
          <div className="linkPlanes">
            <Link to="/Planes" id='link'>
              <img src="/img/plane.jpg" alt="" />
            </Link>
          </div>
        </nav>
        <Outlet/>
        </body>
        </>
);
}
export default Layout