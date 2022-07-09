export default function GeneralFilter({ categories, dispatch, funtionFilter }) {
  function handleClick(e) {
    funtionFilter(e.target.id);
  }

  return (
    <ul
      className="dropdown-menu"
      placeholder="hola"
      aria-labelledby="navbarDropdown"
    >
      <li>Cetegories</li>
      <li>
        <hr className="dropdown-divider" />
      </li>

      {categories &&
        categories?.map((category) => (
          <li key={category.id}>
            <div
              className="dropdown-item"
              id={category.name}
              onClick={(e) => handleClick(e)}
            >
              {category.name}
            </div>
          </li>
        ))}
    </ul>
  );
}
