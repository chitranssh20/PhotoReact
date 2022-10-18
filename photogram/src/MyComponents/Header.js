import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Photogram</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" 
          to= "/addPost">Add Posts </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/settings">Settings</Link>
        </li>
      </ul>
      <span className="navbar-text px-4">
        Username
      </span>
      <span className="navbar-text px-4"><Link className='nav-link' to ='/login'>
        Log In
      </Link>

      </span>
    </div>
  </div>
</nav>
    </> 
     )
}
