import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   getAllColors, 
   getFilterColors, 
   getAllGenders, 
   getFilterGenders, 
   getAllBrands, 
   getFilterBrands 
  } from "../../redux/Actions/actions";

export default function FiltersContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllColors())
    dispatch(getAllGenders())
    dispatch(getAllBrands())
  }, [dispatch])

  const colors = useSelector((state) => state.Colors)
  const genders = useSelector((state) => state.Genders)
  const brands = useSelector((state) => state.Brands)

  const [filters, setFilters] = useState({
    colors: [],
    brands: [],
    prices: {min:0, max:3000},
    genders: [],

  })
  
  // Input
  function handleInputGendersClick (event) {
    let array;

    if (filters.genders.includes(event.target.value)) {
      array = filters.genders.filter(value => value !== event.target.value)
    } else {
      array = filters.genders
      array.push(event.target.value)
    }
    setFilters({
      ...filters,
      genders: array
    }) 
  }
  
  function handleInputBrandsClick (event) {
    let array;

    if (filters.brands.includes(event.target.value)) {
      array = filters.brands.filter(value => value !== event.target.value)
    } else {
      array = filters.brands
      array.push(event.target.value)
    }
    setFilters({
      ...filters,
      brands: array
    }) 
  }

  function handleInputGendersPrices (event) {
    let array;

    if (filters.genders.includes(event.target.value)) {
      array = filters.genders.filter(value => value !== event.target.value)
    } else {
      array = filters.genders
      array.push(event.target.value)
    }
    setFilters({
      ...filters,
      genders: array
    }) 
  }

  function handleInputColorsClick (event) {
    let array;

    if (filters.colors.includes(event.target.value)) {
      array = filters.colors.filter(value => value !== event.target.value)
    } else {
      array = filters.colors
      array.push(event.target.value)
    }
    setFilters({
      ...filters,
      colors: array
    })
  }
//  Submit
  function handleSubmitGenders(){
    dispatch(getFilterGenders(filters.genders))
  }

  function handleSubmitColors(){
    dispatch(getFilterColors(filters.colors))
  }

  function handleSubmitPrices(){
    
  }

  function handleSubmitBrands(){
    dispatch(getFilterBrands(filters.brands))
  }
  
  
  return ( 
    <div className="d-flex align-items-start flex-column" style={{ height: "200px" }}>
      <div className='modal-content'>
        <div className="col w-90 p-2" style={{ width: "200px" }}>Filtro de Generos</div>
          {
            genders.map(e => (
              <div className="modal-body">
                  <input key= {e.name} type="checkbox" name={e.name} value={e.name} onClick={handleInputGendersClick} />
                  <label>{e.name}</label>
              </div>
            ))
          }
          <button  onClick={handleSubmitGenders}>Aplicar </button>
      </div>
      <div  className='modal-content' >
        <div className="col w-90 p-2" style={{ width: "200px" }}>Filtro de Marca</div>
          {
            brands.map(e => (
              <div>
                  <input key= {e.name} type="checkbox" name={e.name} value={e.name} onClick={handleInputBrandsClick} />
                  <label>{e.name}</label>
              </div>
            ))
          }
          <button onClick={handleSubmitBrands}>Aplicar </button>
      </div>
      
      <div className="col w-90 p-2" style={{ width: "200px" }}>Filtro de Precio</div>
      <div className='modal-content'>
           
            <input type="range" min="0" max="3000" step="1" onChange={handleInputGendersPrices}/>
            <label>Min</label>
            <label>Max</label>
          
            <button onClick={handleSubmitPrices} >Aplicar</button>
      </div>
            
      
        <div className="col w-90 p-2" style={{ width: "200px" }}>Filtro de Colores<div>
        <div >
          {
            colors.map(e => (
              <div>
                  <input key= {e.name} type="checkbox" name={e.name} value={e.name} onClick={handleInputColorsClick} />
                  <label>{e.name}</label>
              </div>
            ))
          }
          <button onClick={handleSubmitColors}>Aplicar </button>
        </div>
      
        </div>
      </div> 
    </div>
  );
}