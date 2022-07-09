import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
<div className="container my-6 bg-secondary" >

<footer style={{"background-color":"#deded5;"}}>
<div className="container p-4">
  <div className="row">
    <div className="col-lg-6 col-md-12 mb-4">
      <h5 className="mb-3 text-white">HENRY SHOES</h5>
      <p className='text-light'>
     Somos una empresa familiar surgida de henry, nos dedicamos a ofrecerles el mejor calzado a nuestros clientes
      </p>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <h5 className="mb-3 text-light" style={{"letter-spacing":"2px", "color":"#818963;"}}>links</h5>
      <ul className="list-unstyled mb-0">
        <li className="mb-1">
          <Link to='/questions' className='text-dark'>Preguntas frecuentes</Link>
        </li>
        <li className="mb-1">
          <a href="#!" className='text-dark'>Metodos de pagos</a>
        </li>
        <li className="mb-1">
          <a href="#!" className='text-dark'>Terminos y condiciones</a>
        </li>
        <li>
          <a href="#!" className='text-dark'>Nuestros locales</a>
        </li>
      </ul>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <h5 className="mb-1 text-white" style={{"letter-spacing":"2px","color":"#818963;"}}>Horarios de atencion</h5>
      <table className="table text-light" style={{"color":"#4f4f4f","border-color": "#666;"}}>
        <tbody>
          <tr>
            <td>Mon - Fri:</td>
            <td>8am - 9pm</td>
          </tr>
          <tr>
            <td>Sat - Sun:</td>
            <td>8am - 1am</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

</footer>

</div>
    </div>
  )
}