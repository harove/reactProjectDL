import React, { useEffect, useState } from "react";
import {  useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import axios from "axios";
import { findAll } from '../../client/post.client';
import { findAllAsyncActionCreator } from '../../store/modules/recipe/actions';
import {
  Card as CardRS,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Col,
  Button
} from "reactstrap";

const Home = () => {
  const dispatch = useDispatch();
  const recipeModule = useSelector(store => store.recipe.recipes);

  useEffect(() => {
    dispatch(findAllAsyncActionCreator());
}, []);

  const [receta, setReceta] = useState("");
  const [ing, setIng] = useState("");
  const [ingDe, setIngDe] = useState("");
  const [l, setL] = useState([]);

  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
      findAll()
      .then(function(response) {
        //debugger
        const rs = response.data;
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

      <Col lg="3">
        {recetas.map(receta => (
          <CardRS key={receta.id}>
            <CardBody>
              <CardImg top src={receta.img_url} />
              <CardTitle>{receta.title}</CardTitle>
              {receta.description.map(ingrediente => (
                <CardSubtitle>{ingrediente.nombre + "  " + ingrediente.descripcion }</CardSubtitle>
              ))}
            </CardBody>
          </CardRS>
        ))}
      </Col>
    </div>
  );
};
export default Home;
