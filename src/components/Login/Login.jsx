import React from 'react';
import styles from './Login.module.css';
import classes from '../common/FormsControls/FormsControl.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControl';
import { required } from '../../utils/validation/validators';
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button } from "antd";


const handleFocus = (event) => event.target.select();

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.input}>
                <Field
                    placeholder={'email'}
                    name={'email'}
                    onFocus={handleFocus}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div className={styles.input}>
                <Field
                    placeholder={'password'}
                    name={'password'}
                    type={'password'}
                    onFocus={handleFocus}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    className={styles.checkbox}
                    name={'rememberMe'}
                    type={'checkbox'}
                />
                remember me
            </div>

            {props.captchaUrl && <img src={props.captchaUrl} />}
            {props.captchaUrl && <Field placeholder={'captcha'} name={'captcha'}
                component={Input} validate={[required]} />}

            <div>
                <Button onClick={props.handleSubmit}>Login</Button>
            </div>
            {props.error && <div className={classes.formSummaryError}>{props.error}</div>}
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={`/profile/`} />;
    }

    return (
        <div className={styles.body}>
            <div className={styles.wrap}>
                <h2>Login</h2>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    authorizesUserId: state.auth.userId,
});
export default connect(mapStateToProps, { login })(Login);
