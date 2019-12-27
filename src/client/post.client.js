import { API_HOST } from './config';

export const findAll = () => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/post`, {
        method: 'GET', // or 'PUT'
    }).then(res => res.json())
}

export const findById = (id) => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/post/${id}`, {
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
export const save = (recipe) => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/post`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(recipe),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
};