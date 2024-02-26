import { useState } from "react";
import marvelList from "../service/marvel";

function MarvelComponent() {
  const [marvel, setMarvel] = useState(marvelList);

  const handleDeleteMarvel = (id) => {
    const newMarvelState = marvel.filter((marvelItem) => marvelItem.id != id);
    setMarvel(newMarvelState);
  };

  if (marvel.length == 0) {
    return <h2>There aren't any Marvel charactor to choose</h2>;
  }

  return (
    <main className="container">
      <h2>There are {marvel.length} Marvel's charactors to choose</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {marvel.map(function (marvelItem) {
            return (
              <tr key={marvelItem.id}>
                <th scope="row">{marvelItem.id}</th>
                <td>{marvelItem.name}</td>
                <td>
                  <img src={marvelItem.image} style={{ width: 100 }}></img>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteMarvel(marvelItem.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

export default MarvelComponent;
