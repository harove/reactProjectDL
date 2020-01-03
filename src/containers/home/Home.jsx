import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { findAll } from "../../client/post.client";
import { findAllAsyncActionCreator } from "../../store/modules/recipe/actions";
import Header from "../../components/header/Header";
import {
  Container,
  Card as CardRS,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
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
    <Container className="Home">
      {/*JSON.stringify(recipeModule)*/}
      <Row>
        <Col lg="3">
          {recetas.map(receta => (
            <CardRS key={receta.id}>
              <CardBody>
                <CardImg top src={receta.image_url} />
                <CardTitle>{receta.title}</CardTitle>
                {receta.description.map(ingrediente => (
                  <CardSubtitle key={ingrediente.id}>
                    {ingrediente.nombre + "  " + ingrediente.descripcion}
                  </CardSubtitle>
                ))}
              </CardBody>
            </CardRS>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
