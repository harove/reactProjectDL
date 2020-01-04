/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const RecipeModal = props => {
  const { recipe } = props;

  const desc = JSON.parse(recipe.data.description);


  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {recipe.data.id} {recipe.data.title}{" "}
      </ModalHeader>
      <ModalBody>
        <ul>
          {desc.map(ingDetail => (
            <li>
              <p> {ingDetail.nombre}</p>
            </li>
          ))}
        </ul>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Do Something
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default RecipeModal;
