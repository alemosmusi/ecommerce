export default function SearchBar() {
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success bg-dark " type="submit">
        Search
      </button>
    </form>
  );
}
