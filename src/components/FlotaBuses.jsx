import { useState, useEffect } from 'react';

function FlotaBuses() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setPersonajes(data.results))
      .catch(error => console.error('Error al obtener los personajes de Rick and Morty:', error));
  }, []);

  return (
    <>
      <div className="h-full flex justify-center p-6">
        <div className=" h-full p-6 flex flex-wrap justify-center">
          {personajes.map(personaje => (
            <div key={personaje.id} className="bg-gray-200 h-96 w-64 lg:w-1/3 xl:w-1/4 2xl:w-1/5 m-4 flex flex-col items-center">
              <img src={personaje.image} alt={personaje.name} className="w-full h-3/4 object-cover" />
              <div className="p-4 text-center">
                <p className="text-lg font-semibold">{personaje.name}</p>
                <p>Status: {personaje.status}</p>
                <p>Species: {personaje.species}</p>
                <p>Origin: {personaje.origin.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FlotaBuses;
