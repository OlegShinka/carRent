import { useEffect, useState } from "react";
import Car from "../car/Car";
import getCars from "../../components/api";
import { LoadMore } from "../../components/loadMore/LoadMore";

export default function Catalog() {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    async function getAll() {
      try {
        const response = await getCars(page);
        setResults(response.data);
        // setResults((prevResults) => [...prevResults, ...response.data]);
        console.log("response.data :>> ", response.data);

        return response;
      } catch (error) {
        console.error("Error get cars", error);
      }
    }
    getAll();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };
  console.log("page :>> ", page);
  console.log("results :>> ", results);
  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          listStyle: "none",
          gap: "1.5em",
        }}
      >
        {results.map(
          ({ img, model, description, id, functionalities, accessories }) => (
            <li key={id}>
              <Car
                image={img}
                mod={model}
                desc={description}
                index={id}
                func={functionalities}
                acc={accessories}
              />
            </li>
          )
        )}
      </ul>
      {/* <LoadMore handleLoadMore={handleLoadMore} /> */}
      {results.length >= page && <LoadMore handleLoadMore={handleLoadMore} />}
    </div>
  );
}

// export default function Catalog() {
//   return (
//     <div>
//       <ul
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           listStyle: "none",
//           gap: "1.5em",
//         }}
//       >
//         {cars.map(({ img, model, description, id }) => (
//           <li key={id}>
//             <Car image={img} mod={model} desc={description} index={id} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
