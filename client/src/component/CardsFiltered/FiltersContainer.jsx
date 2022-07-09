export default function FiltersContainer() {
  return (
    <div
      className="d-flex align-items-start flex-column"
      style={{ height: "200px" }}
    >
      <div className="col w-90 p-2" style={{ width: "200px" }}>
        Filtro de Generos
      </div>
      <div className="col w-90 p-2" style={{ width: "200px" }}>
        Filtro de Marca
      </div>
      <div className="col w-90 p-2" style={{ width: "200px" }}>
        Filtro de Precio
      </div>
      <div className="col w-90 p-2" style={{ width: "200px" }}>
        Filtro de Colores
      </div>
    </div>
  );
}
