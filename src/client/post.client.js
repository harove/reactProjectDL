import { API_HOST } from './config';

export const findAll = () => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/user`, {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
}

export const findById = (id) => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/user/${id}`, {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
};

/*
email,
password
name
*/
export const save = (user) => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/user`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
};