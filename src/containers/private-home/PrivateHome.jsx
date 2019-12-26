import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Button, Table } from 'reactstrap';
import UserModal from '../../components/user-modal/UserModal';

import { logoutActionCreator } from '../../store/modules/auth/actions';
import { findAllAsyncActionCreator, findByIdAsyncActionCreator } from '../../store/modules/user/actions';


const PrivateHome = () => {
    const dispatch = useDispatch();
    const userModule = useSelector(store => store.user.users);
    const userByIdModule = useSelector(store => store.user.userById);
    useEffect(() => {
        dispatch(findAllAsyncActionCreator());
    }, []);

    const handlerLogout = () => {
        dispatch(logoutActionCreator());
    };

    const handlerFindById = (user) => {
        return (event) => {
            dispatch(findByIdAsyncActionCreator(user.id));
        }
    }

    return (
        <Container className="private-home">
            Private Home
            <Link to="/private/home/user/create">Crear</Link>
            <Button onClick={handlerLogout}>Cerrar sesión</Button>
            <Table
                striped
                hover
                responsive
            >
                
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {userModule.data.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><Button onClick={handlerFindById(user)}>Ver</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {userByIdModule.data.id && (<UserModal user={userByIdModule} />)}
        </Container>
    );
};

export default PrivateHome;