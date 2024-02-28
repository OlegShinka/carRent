import React from "react";
import { useParams } from "react-router-dom";
import cars from "../cars.json";

//У компоненті CarDetails отримайте id з параметрів маршруту і використовуйте його для пошуку відповідного автомобіля в масиві cars

const CarDetails = () => {
  const { id } = useParams();
  //знаходимо автомобіль за його id
  const car = cars.find((car) => car.id === parseInt(id));
  console.log("car :>> ", car);
  if (!car) {
    return <div>Car not found!</div>;
  }

  return (
    <div>
      <h2>{car.model}</h2>
      <img src={`${car.img}`} width={`800 px`} alt={`${car.model}`} />
      <div>
        <h3>Functionalities</h3>
        <ul>
          {car.functionalities.map((funk) => (
            <li>{funk}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Accessories</h3>
        <ul>
          {car.accessories.map((funk) => (
            <li>{funk}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarDetails;
