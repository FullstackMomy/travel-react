import React from "react";
import Tour from "./tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.id}
              //   name={tour.name}
              //   info={tour.info}
              //   image={tour.image}
              //   price={tour.price}
              {...tour}
              removeTour={removeTour}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
