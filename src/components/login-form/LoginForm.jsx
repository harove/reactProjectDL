import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAsyncActionCreator } from '../../store/modules/auth/actions';

const LoginForm = (props) => {
    const store = useSelector(store => store);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handlerSubmit = (event) => {
        event.preventDefault();
        // client
        dispatch(loginAsyncActionCreator({
            email,
            password,
        }));
    }

    useEffect(() => {
        if(store.auth.isLogin) {
            props.history.push('/private/home/recipe');
        }
    }, [store.auth.isLogin, props]);

    return (
        <div className="login-form">
            <form onSubmit={handlerSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={({ target }) => setEmail(target.value) }
                />

                <input
                    type="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value) }
                />
                <button>Login</button>
                <pre>
                    {/*JSON.stringify(store, undefined, 2)*/}
                </pre>
            </form>
        </div>
    );
};

export default LoginForm;