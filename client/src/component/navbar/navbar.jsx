import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import logotoro from '../../logotoro.png'
import { getAllCategories, getAllBrands, getFilterCategories, getFilterBrands } from '../../redux/actions'

import GeneralFilter from './GeneralFilter'
import SearchBar from './SearchBar'

export default function Navbar() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllBrands())
    dispatch(getAllCategories())
    // getAllBrands;
    // getAllCategories;
    // getAllColors;
    // getAllGenders;
    // getPricesRange;
  }, [dispatch])

  const categories = useSelector(state => state.Categories)
  const brands = useSelector(state => state.Brands)
  const [nameSearch, setNameSearch] = useState('')

  const navigate = useNavigate()

  const filterCategory = e => {
    navigate('/filters')
    dispatch(getFilterCategories(e))
  }

  const filterBrand = e => {
    navigate('/filters')
    dispatch(getFilterBrands(e))
  }

  return (
    <div style={{ height: '80px' }}>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h5 className="text-white h4">Collapsed content</h5>
          <span className="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <img src={logotoro} className="d-inline-block align-top" width="30" height="30" alt="logo" />
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/start">
                  Quiero empezar
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/carshop">
                  Carrito
                </Link>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1 multiCollapseExample2"
                >
                  Categories
                </div>
                <GeneralFilter categories={categories} funtionFilter={filterCategory} />
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1 multiCollapseExample2"
                >
                  Brands
                </div>
                <GeneralFilter categories={brands} funtionFilter={filterBrand} />
              </li>
            </ul>

            <SearchBar dispatch={dispatch} name={nameSearch} setName={setNameSearch} navigate={navigate} />
          </div>
        </div>
      </nav>
    </div>
  )
}
