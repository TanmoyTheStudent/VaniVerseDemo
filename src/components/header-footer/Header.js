import {Link} from "react-router-dom"
import './header.css'

function Header() {
  return (
    <div >
   
   <nav className="navbar" style={{ backgroundColor: '#e7dedd' }}>
    
   
  
      
        <div className="col-lg-4 col-md-12 col-12 d-flex flex-column align-items-center justify-content-center" >
          <Link className="navbar-brand mb-0 h3  text-primary fs-1 fw-bold home-link"  to="/" >
            Vani Verse
          </Link>
    </div> 
    <div className="col-lg-2 col-md-12 col-12 d-flex flex-column align-items-center justify-content-center " style={{fontFamily:"Georgia"}}>
      <Link className="navbar-brand mb-0 h3" to="/our-services">
          Services
      </Link>
      </div>

      <div className="col-lg-2 col-md-12 col-12 d-flex flex-column align-items-center justify-content-center " style={{fontFamily:"Georgia"}}>
      <Link className="navbar-brand mb-0 h3" to="/participate&earn">
          Participate and Earn
      </Link>
      </div>

      <div className="col-lg-2 col-md-12 col-12 d-flex flex-column align-items-center justify-content-center " style={{fontFamily:"Georgia"}}>
      <Link className="navbar-brand mb-0 h3" to="/about-us">
          About Us
      </Link>
      </div>
      
      <div className="col-lg-2 col-md-12 col-12 d-flex flex-column align-items-center justify-content-center " style={{fontFamily:"Georgia"}}>
      <Link className="navbar-brand mb-0 h3" to="/login">
          Login 
      </Link>
    
      <Link className="navbar-brand mb-0 h3" to="/register-yourself">
        ||  Register
      </Link>
      </div>
      
    


  </nav>
  </div>
  )
}

export default Header


// import {Link} from "react-router-dom"
// import { useAuth } from "../../state-management/context/AuthContext"

// function Header() {
//   const {user,profile,handleLogout}=useAuth()
//   return (
//     <div >
   
//    <nav className="navbar  bg-warning">
    
//       <div className=" col-sm-4 col-md-6 col-lg-8">
//           <Link className="navbar-brand mb-0 h3 p-5 " to="/" >Home</Link>
//       </div> 
//       {user && (
//   <div>
//     {profile && user.role === "proprietor" && (
//       <Link className="navbar-brand mb-0 h3" to="/owner-dashboard">
//         Owner Dashboard
//       </Link>
//     )}
//     {profile && user.role === "user" && (
//       <Link className="navbar-brand mb-0 h3" to="/client-dashboard">
//         Client Dashboard
//       </Link>
//     )}
//     {user.role === "admin" && (
//       <Link className="navbar-brand mb-0 h3" to="/admin-dashboard">
//         Admin Dashboard
//       </Link>
//     )}
//   </div>
// )}



   


//       { !user? (
//         <>
//         <Link className="navbar-brand mb-0 h3" to="/login" >Login</Link>
            
//         <Link className="navbar-brand mb-0 h3 " to="/registration">Register</Link>
//       </>
//       ):(
//       <>
//         <Link className="navbar-brand mb-0 h3" to="/account" >Account</Link>
            
//         <Link 
//         className="navbar-brand mb-0 h3 " 
//         to="/" 
//         onClick={(e)=>{
//           localStorage.removeItem("token")
//           handleLogout()
//         }}
//         >
//           Logout
//         </Link>
//       </>
//       )
//       }
                
            
      
//     </nav>
  

//     </div>

//   )
// }

// export default Header


// //If want to implement active css
// import { Link, useLocation } from 'react-router-dom';
// import './Header.css'; // Import the CSS file if using an external stylesheet

// function Header() {
//   const location = useLocation(); // Hook to get the current path

//   return (
//     <div>
//       <nav className="navbar" style={{ backgroundColor: '#e7dedd' }}>
//         <div className="col-lg-4 col-md-12 col-12 d-flex flex-column align-items-center justify-content-center">
//           <Link
//             className={`navbar-brand mb-0 h3 text-primary fs-1 fw-bold ${location.pathname === '/' ? 'active' : ''}`}
//             to="/"
//           >
//             Vani Verse
//           </Link>
//         </div>
//         <div className="col-lg-2 col-md-12 col-12 d-flex flex-column align-items-center justify-content-center" style={{ fontFamily: "Georgia" }}>
//           <Link
//             className={`navbar-brand mb-0 h3 ${location.pathname === '/our-services' ? 'active' : ''}`}
//             to="/our-services"
//           >
//             Services
//           </Link>
//         </div>
//         <div className="col-lg-2 col-md-12 col-12 d-flex flex-column align-items-center justify-content-center" style={{ fontFamily: "Georgia" }}>
//           <Link
//             className={`navbar-brand mb-0 h3 ${location.pathname === '/participate&earn' ? 'active' : ''}`}
//             to="/participate&earn"
//           >
//             Participate and Earn
//           </Link>
//         </div>
//         <div className="col-lg-2 col-md-12 col-12 d-flex flex-column align-items-center justify-content-center" style={{ fontFamily: "Georgia" }}>
//           <Link
//             className={`navbar-brand mb-0 h3 ${location.pathname === '/about-us' ? 'active' : ''}`}
//             to="/about-us"
//           >
//             About Us
//           </Link>
//         </div>
//         <div className="col-lg-2 col-md-12 col-12 d-flex flex-column align-items-center justify-content-center" style={{ fontFamily: "Georgia" }}>
//           <Link
//             className={`navbar-brand mb-0 h3 ${location.pathname === '/login' ? 'active' : ''}`}
//             to="/login"
//           >
//             Login
//           </Link>
//           <Link
//             className={`navbar-brand mb-0 h3 ${location.pathname === '/register-yourself' ? 'active' : ''}`}
//             to="/register-yourself"
//           >
//             || Register
//           </Link>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;
