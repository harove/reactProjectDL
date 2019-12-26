import React, { Component } from 'react';
import LoginForm from '../../components/login-form/LoginForm';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <LoginForm {...this.props} />
            </div>
        )
    }
}

export default Login;