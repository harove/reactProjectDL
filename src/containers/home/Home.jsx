import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [receta, setReceta] = useState("");
  const [ing, setIng] = useState("");
  const [ingDe, setIngDe] = useState("");
  const [l, setL] = useState([]);

  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    axios("http://localhost:3333/api/post")
      .then(function(response) {
        const rs = response.data.data;
        const nlrs = rs.map(r => ({
          ...r,
          description: JSON.parse(r.description)
        }));
        setRecetas(nlrs);
        //debugger;
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const handlerGuardar = () => {
    const recetaObj = {
      title: receta,
      description: JSON.stringify(l),
      image_url: ""
    };

    axios
      .post("http://localhost:3333/api/post", recetaObj)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const handlerAddIng = event => {
    const ln = l;
    ln.push({
      nombre: ing,
      descripcion: ingDe
    });
    setL(ln);
    setIng("");
    setIngDe("");
  };

  return (
    <div className="Home">
      <label>Nombre Receta</label>
      <input
        type="text"
        value={receta}
        onChange={({ target }) => setReceta(target.value)}
      />
      <br />
      <label>Nombre ingrediente</label>
      <input
        type="text"
        value={ing}
        onChange={({ target }) => setIng(target.value)}
      />
      <br />
      <label>Descripcion ingrediente</label>
      <input
        type="text"
        value={ingDe}
        onChange={({ target }) => setIngDe(target.value)}
      />
      <br />
      <button onClick={handlerAddIng}>Agregar ingrediente</button>
      <hr />
      <ul>
        {l.map(item => (
          <li>
            {item.nombre} : {item.descripcion}
          </li>
        ))}
      </ul>
      <button onClick={handlerGuardar}>Guardar receta</button>
   
      {JSON.stringify(recetas)}


    </div>
  );
};
export default Home;
