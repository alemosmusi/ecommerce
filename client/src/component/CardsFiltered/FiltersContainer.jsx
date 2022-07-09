import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllColors, getFilterColors } from "../../redux/Actions/actions";

export default function FiltersContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllColors())
  }, [dispatch])

  const colors = useSelector((state) => state.Colors)
  
  const [filters, setFilters] = useState({
    colors: [],
    brands: [],
    prices: [],
    genders: [],
  })

  function handleInputColorsClick (e) {
    setFilters({
      ...filters,
      colors: filters.colors.includes(e.target.value) ? filters.colors.filters(value=>value !== e.target.value) : filters.colors.push(e.target.value)
    })
  }

  return (
    <div className="d-flex align-items-start flex-column" style={{ height: "200px" }}>
      <div className="col w-90 p-2" style={{ width: "200px" }}>Filtro de Generos</div>
      <div className="col w-90 p-2" style={{ width: "200px" }}>Filtro de Marca</div>
      <div className="col w-90 p-2" style={{ width: "200px" }}>Filtro de Precio</div>
      <div className="col w-90 p-2" style={{ width: "200px" }}>Filtro de Colores
        <div>
          {
            colors.map(e => (
              <div>
                  <input key= {e.name} identy='colors' type="checkbox" name={e.name} value={e.name} onClick={(e) => handleInputColorsClick(e)} />
                  <label>{e.name}</label>
              </div>
            ))
          }
          <button type="submit">Aplicar </button>
        </div>
      </div> 
    </div>
  );
}
