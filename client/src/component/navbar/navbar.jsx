import React from 'react'
import logotoro from '../../logotoro.png'
export default function Navbar() {
  return (
    <div>
      <div className="collapse" id="navbarToggleExternalContent">
  <div className="bg-dark p-4">
    <h5 className="text-white h4">Collapsed content</h5>
    <span className="text-muted">Toggleable via the navbar brand.</span>
  </div>
</div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <img src={logotoro} className='d-inline-block align-top' width='30' height='30' alt='logo' />
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Quiero empezar</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           FILTROS
          </a>
          <ul className="dropdown-menu" placeholder='hola' aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">genero</a></li>
            <li><a className="dropdown-item" href="#">precios</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">algo mas</a></li>
          </ul>
        </li>
      
      </ul>

      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success bg-dark " type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>

  )
}
