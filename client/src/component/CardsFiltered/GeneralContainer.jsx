import CardsFiltered from "./CardsFiltered";
import FiltersContainer from "./FiltersContainer";

export default function GeneralContainer() {
  return (
    <>
      <div className="container-fluid justify-content-center d-flex p-0">
        <FiltersContainer />
        <div className="overflow-auto">
          <CardsFiltered />
        </div>
      </div>
    </>
  );
}
