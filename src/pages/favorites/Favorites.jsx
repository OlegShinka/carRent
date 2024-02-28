import { useEffect, useState } from "react";
import getCars from "../../components/api";

// export default function Favorite() {
//   const [result, setResult] = useState([]);

//   useEffect(() => {
//     async function getResult() {
//       try {
//         const responseData = await getCars();
//         console.log("responseData :>> ", responseData.model);
//         setResult(responseData);
//       } catch (error) {
//         console.error("Error fetching cars:", error);
//       }
//     }
//     getResult();
//   }, []);

//   return (
//     <div>
//       Your favorite cars.
//       <ul>
//         {result.map((car) => (
//           <li key={car.id}>
//             <img src={car.img} alt={car.model} />
//             {car.make} {car.model}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import React from "react";

const Favorite = () => {
  return <div>Favorites</div>;
};

export default Favorite;
