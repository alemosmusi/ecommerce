import "./Total.css";

export default function Total({ prices }) {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td> {prices.amount} articulos</td>
          <td>$./{prices.totalPrice}</td>
        </tr>
        <tr>
          <td>Transporte </td>
          <td>Gratis</td>
        </tr>

        <tr>
          <td colSpan={2}>
            <div className="d-flex flex-row align-items-center">
              <i
                className="fa fa-lock p-2"
                aria-hidden="true"
                style={{ height: "3em", width: "3em" }}
              ></i>
              <div>
                <h5>COMPRA SEGURA</h5>
                <h6>Todas Nuestras compras son seguras</h6>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <div className="d-flex flex-row justify-content-start align-items-center">
              <i
                className="fa fa-handshake p-2"
                aria-hidden="true"
                style={{ height: "3em", width: "3em" }}
              ></i>
              <div>
                <h5>CAMBIOS Y DEVOLUCIONES</h5>

                <h6>
                  Puedes solicitar cambio de producto dentro del plazo
                  establecido
                </h6>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
