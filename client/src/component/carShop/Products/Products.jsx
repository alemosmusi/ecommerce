import CardShop from '../Card/CardShop'

export default function ProductsContainer({ carProducts }) {
  return (
    <div className="Products">
      {carProducts && carProducts.length ? (
        carProducts?.map(s => (
          <>
            <CardShop
              key={s.id}
              id={s.id}
              name={s.name}
              brand={s.brand}
              price={s.price}
              img={s.img}
              stock={s.stock}
              color={s.color}
              size_range={s.size_range}
              // material={s.material}
              // released={s.released}
              gender={s.gender}
              // designer={s.designer}
              // details={s.details}
              // shoe_condition={s.shoe_condition}
              rating={s.rating}
              // categories={s.categories}
              amount={s.amount}
            />
            <br />
          </>
        ))
      ) : (
        <h1 className="text">El carrito está vacío</h1>
      )}
    </div>
  )
}
