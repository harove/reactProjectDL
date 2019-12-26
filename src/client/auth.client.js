import { API_HOST } from './config';

export const login = (user) => {
    return fetch(`${API_HOST}/login`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(user), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        //.catch(error => console.error('Error:', error))
        //.then(response => console.log('Success:', response));
}