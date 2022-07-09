export default function Total({ numberProducts, priceProducts }) {
  return (
    <table class="table">
      <tbody>
        <tr>
          <td> {numberProducts} articulos</td>
          <td>$./{priceProducts}</td>
        </tr>
        <tr>
          <td>Transporte </td>
          <td>Gratis</td>
        </tr>
        <tr>
          <td>
            <i class="fa fa-lock" aria-hidden="true"></i>
            <h3>Compra Segura</h3>
            <h5>Todas Nuestras compras son seguras</h5>
          </td>
          <td>
            <i class="fa fa-handshake-o" aria-hidden="true"></i>
            <h3>Compra Segura</h3>
            <h5>Todas Nuestras compras son seguras</h5>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
