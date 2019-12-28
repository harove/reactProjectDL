import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    InputGroup, InputGroupAddon, Input, InputGroupText,
    Container, Row, Col, Button } from 'reactstrap';
import { saveAsyncActionCreator  } from '../../store/modules/recipe/actions';


const PrivateSaveRecipe = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image_url, setImage_url] = useState('');
    const dispatch = useDispatch();
    const recipeSaveModule = useSelector(store => store.recipe.recipeSave);
    useEffect(() => {
        dispatch({
            type: 'RECIPE_SAVE_VOID',
            payload: null,
        })
    }, []);

    useEffect(() => {
        if(recipeSaveModule.data.id) {
            props.history.push('/private/home/recipe');
            dispatch({
                type: 'RECIPE_SAVE_VOID',
                payload: null,
            })
        }
    }, [recipeSaveModule.data.id])

    const handlerSave = (event) => {
        event.preventDefault();
        const recipe = {
            title,
            description,
            image_url,
        };
        dispatch(saveAsyncActionCreator(recipe));
    }

    const validForm = () => {
        return title === '' || description === '' || image_url === '';
    }

    return (
        <div className="private-save-recipe">
            <Container>
                <Row>
                    <Col>
                    <form onSubmit={handlerSave}>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>N</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Title" value={title} onChange={({ target}) => setTitle(target.value)} />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                <Input type="text" placeholder="description" value={description} onChange={({ target}) => setDescription(target.value)} />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>C</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="image_url" value={image_url} onChange={({ target}) => setImage_url(target.value)} />
            </InputGroup>
            <br />
            <Button disabled={validForm()} color="primary">Crear</Button>
            </form>
                    </Col>
                </Row>
            </Container>
            {JSON.stringify(recipeSaveModule)}
        </div>
    );
}
export default PrivateSaveRecipe;