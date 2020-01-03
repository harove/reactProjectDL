import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Button, Table } from "reactstrap";
import RecipeModal from "../../components/recipe-modal/RecipeModal";

import { logoutActionCreator } from "../../store/modules/auth/actions";
import {
  findAllAsyncActionCreator,
  findByIdAsyncActionCreator
} from "../../store/modules/recipe/actions";

const PrivateHome = () => {
  const dispatch = useDispatch();
  const recipeModule = useSelector(store => store.recipe.recipes);
  const recipeByIdModule = useSelector(store => store.recipe.recipeById);
  useEffect(() => {
    dispatch(findAllAsyncActionCreator());
  }, []);

//   useEffect(() => {
//     const descriptionOk = JSON.parse(recipeModule.data)
//   }, []);




  const handlerLogout = () => {
    dispatch(logoutActionCreator());
  };

  const handlerFindById = recipe => {
    return event => {
      dispatch(findByIdAsyncActionCreator(recipe.id));
    };
  };

  return (
    <Container className="private-home-recipe">
      Private Home
      <Link to="/private/home/recipe/create">Crear</Link>
      <Button onClick={handlerLogout}>Cerrar sesión</Button>
      {/*JSON.stringify(recipeModule)*/}
      <Table striped hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Ingredient</th>
            <th>ingredient detail</th>
            <th>Image_url</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {recipeModule.data.map(recipe => (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>{recipe.title}</td>
              <td>{recipe.description[0].nombre}</td>
              <td>{recipe.description[0].descripcion}</td>
              <td>{recipe.image_url}</td>
              <td>
                <Button onClick={handlerFindById(recipe)}>Ver</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {recipeByIdModule.data.id && <RecipeModal recipe={recipeByIdModule} />}
    </Container>
  );
};

export default PrivateHome;
