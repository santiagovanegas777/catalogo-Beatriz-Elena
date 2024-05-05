import {Link} from 'react-router-dom'

import userContext from '../Context/userContext';
import { useContext } from 'react';

// import Imput from '../Shared/Share';


const NavBarClient = () => {

  const {user} = useContext(userContext);
  
  return (
   

      <nav >
  <div class="container-fluid">
    
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
      <li class="nav-item">
        <Link to="filtro" class="nav-link active"  >Categorias</Link>
        </li>
        {user ?
          <li class="nav-item">
            <Link to="/logout" class="nav-link"  >Logout</Link>
          </li>:
              <li class="nav-item">
              <Link to="/login" class="nav-link" >Login</Link>
            </li>}
         
        
        <li class="nav-item dropdown">
          <li class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <p>{user != null ? user.username : "Account"}</p>
          </li>
          <ul class="dropdown-menu">

{user ? <li><Link to="/infoDatosPersonales" class="dropdown-item">Settings</Link></li>:
<li><Link to="/login" class="dropdown-item">Settings</Link></li>}


          </ul>
        </li>
       
      </ul>
      {/* <form class="d-flex" role="search">
        <Imput class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    
         <button class="btn btn-outline-success" 
    
        type="submit">Search</button> 
      </form> */}
    </div>
  </div>
</nav>
     
  )
}

export default NavBarClient
