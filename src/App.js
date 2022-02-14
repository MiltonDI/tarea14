import React, { useState,useEffect} from "react";

function App() {
  const [datos, setDatos] = useState([]);
  const ACCES_POINT = "https://rickandmortyapi.com/api/character";

  const getDatos = (url) => {
    fetch(url)
    .then (data => {
      return data.json();
    })
    .then(data => {
      setDatos(data.results);
    })
    .catch( error =>{
      console.log(error);
    });
  }
  useEffect(() => {
    getDatos(ACCES_POINT);
    //return () => {}
    
  }, [])
  return (
    <div >
      <h1>App Imagenes</h1>
    </div>
  );
}

export default App;
