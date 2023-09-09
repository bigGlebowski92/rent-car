import React from 'react';

const CarsFiltersOpitons = () => {
  return (
    <section className="mt-10">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore our cars you might like</h2>
      </div>
      <div>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Price
          </option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
      </div>
    </section>
  );
};

export default CarsFiltersOpitons;
