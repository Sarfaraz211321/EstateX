// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// const NavBar = () => {
//   const navigate = useNavigate()
//   const [useData, setUserData] = useState(null)
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('userInfo'));
//     setUserData(user)
//   }, [])

//   const handleLogout = () => {
//     localStorage.removeItem('userInfo');
//     navigate('/login')
//   }

//   if (useData?.usertype == "admin") {
//     return (<>
//       <nav className="navbar navbar-expand-sm bg-white border-bottom shadow-sm sticky-top">
//         <div className="container">
//           <div className="navbar-brand text-danger fw-bold d-flex align-items-center" >
//             <img src="favicon.png" alt="Logo" /> &nbsp;<b className='font text-center'>EstateX</b>
//           </div>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="mx-5 collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto mb-2 mb-sm-0">
//               <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/admin-add">Add</Link></li>
//               <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/admin-list">List</Link></li>
//               <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/admin-sold">Sold</Link></li>
//               <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/admin-user">User</Link></li>
//                <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/admin-contact">Contact</Link></li>
//               <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/admin-profile">Profile</Link></li>
              
//             </ul>
//             <div className="d-flex align-items-center gap-3" onClick={handleLogout}>
//               <Link > <button className=" btn btn-lm btn-danger ms-2 ">LogOut</button></Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>)
//   } else if (useData?.usertype == "user") {
//     return (<>
//       <nav className="navbar navbar-expand-sm bg-white border-bottom shadow-sm sticky-top">
//         <div className="container">
//           <div className="navbar-brand text-danger fw-bold d-flex align-items-center" >
//             <img src="favicon.png" alt="Logo" /> &nbsp;<b className='font text-center'>EstateX</b>
//           </div>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="mx-5 collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto mb-2 mb-sm-0">
//               <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/user-property">Property</Link></li>
//               <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/user-bought">Bought</Link></li>
//               <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/user-profile">Profile</Link></li>
//               <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/admin-contact">Contact</Link></li>
             
//             </ul>
//             <div className="d-flex align-items-center gap-3" onClick={handleLogout}>
//               <Link > <button className="btn btn-lm btn-danger ms-2 ">LogOut</button></Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>)
//   } else {
//     return (
//       <>
//         <nav className="navbar navbar-expand-sm bg-white border-bottom shadow-sm sticky-top">
//           <div className="container">
//             <div className="navbar-brand text-danger fw-bold d-flex align-items-center" >
//               <img src="favicon.png" alt="Logo" /> &nbsp;<b className='font text-center'>EstateX</b>
//             </div>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="mx-5 collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav me-auto mb-2 mb-sm-0">
//                 <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/">Home</Link></li>
//                 <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/about">About</Link></li>
//                 <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/services">Services</Link></li>
//                 <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/property">Property</Link></li>
//               </ul>
//               <div className="d-flex align-items-center gap-3">
//                 <Link to='/register'>  <button className=" btn btn-lm btn-danger ms-2  ">Registration</button></Link>
//                 <Link to='/login'> <button className=" btn btn-lm btn-danger ms-2 ">Login</button></Link>
//               {/* <Link to='/admin-add'> <button className=" btn btn-lm btn-danger ms-2 ">Add Property</button></Link> */}
//               </div>
//             </div>
//           </div>
//         </nav>
//       </>
//     )
//   }

// }

// export default NavBar

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {

const navigate = useNavigate();

const [useData, setUserData] = useState(null);

useEffect(() => {
const user = JSON.parse(localStorage.getItem('userInfo'));
setUserData(user);
}, []);

const handleLogout = () => {
localStorage.removeItem('userInfo');
navigate('/login');
};

// ADMIN NAVBAR
if (useData?.usertype === "admin") {
return (
<> <nav className="navbar navbar-expand-sm bg-white border-bottom shadow-sm sticky-top"> <div className="container">


        <div className="navbar-brand text-danger fw-bold d-flex align-items-center">
          <img src="favicon.png" alt="Logo" />
          &nbsp;
          <b className="font text-center">EstateX</b>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="mx-5 collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav me-auto mb-2 mb-sm-0">

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/admin-add">
                Add
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/admin-list">
                List
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/admin-sold">
                Sold
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/admin-user">
                User
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/admin-contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/admin-profile">
                Profile
              </Link>
            </li>

          </ul>

          <div className="d-flex align-items-center gap-3">
            <button
              className="btn btn-danger ms-2"
              onClick={handleLogout}
            >
              LogOut
            </button>
          </div>

        </div>
      </div>
    </nav>
  </>
);


}

// USER NAVBAR
else if (useData?.usertype === "user") {
return (
<> <nav className="navbar navbar-expand-sm bg-white border-bottom shadow-sm sticky-top"> <div className="container">


        <div className="navbar-brand text-danger fw-bold d-flex align-items-center">
          <img src="favicon.png" alt="Logo" />
          &nbsp;
          <b className="font text-center">EstateX</b>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="mx-5 collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav me-auto mb-2 mb-sm-0">

            <li className="nav-item">
              <Link
                className="nav-link text-dark fw-bold"
                to="/user-property"
              >
                Property
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-dark fw-bold"
                to="/user-bought"
              >
                Bought
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-dark fw-bold"
                to="/user-profile"
              >
                Profile
              </Link>
            </li>

            {/* USER CONTACT */}
            <li className="nav-item">
              <Link
                className="nav-link text-dark fw-bold"
                to="/contact"
              >
                Contact
              </Link>
            </li>

          </ul>

          <div className="d-flex align-items-center gap-3">
            <button
              className="btn btn-danger ms-2"
              onClick={handleLogout}
            >
              LogOut
            </button>
          </div>

        </div>
      </div>
    </nav>
  </>
);


}

// PUBLIC NAVBAR
else {
return (
<> <nav className="navbar navbar-expand-sm bg-white border-bottom shadow-sm sticky-top"> <div className="container">


        <div className="navbar-brand text-danger fw-bold d-flex align-items-center">
          <img src="favicon.png" alt="Logo" />
          &nbsp;
          <b className="font text-center">EstateX</b>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="mx-5 collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav me-auto mb-2 mb-sm-0">

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/services">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/property">
                Property
              </Link>
            </li>

          </ul>

          <div className="d-flex align-items-center gap-3">

            <Link to="/register">
              <button className="btn btn-danger ms-2">
                Registration
              </button>
            </Link>

            <Link to="/login">
              <button className="btn btn-danger ms-2">
                Login
              </button>
            </Link>

          </div>

        </div>
      </div>
    </nav>
  </>
);


}
};

export default NavBar;
