// import React from "react";
// import styles from './Login.module.css';
// import classes from '../common/FormsControls/FormsControl.module.css'
// import {Field, reduxForm} from "redux-form";
// import {Check, Input, Log, Pass} from "../common/FormsControls/FormsControl";
// import {required} from "../../utils/validation/validators";
// import {login} from '../../redux/auth-reducer'
// import {connect} from "react-redux";
// import {Redirect} from "react-router-dom";
// import Button from "@material-ui/core/Button";
//
// const handleFocus = (event) => event.target.select();
//
// const LoginForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit} role='form'>
//             <div>
//                 <Field name={'email'} type='email' onFocus={handleFocus}
//                        component={Log} validate={[required]}/>
//             </div>
//             <div>
//                 <Field name={'password'}
//                        onFocus={handleFocus}
//                        component={Pass} validate={[required]}/>
//             </div>
//             <div>
//                     <Field component={Check} className={styles.checkbox} name={'rememberMe'} type={'checkbox'}/>
//             </div>
//
//             {props.captchaUrl && <img src={props.captchaUrl}/>}
//             {props.captchaUrl && <Field placeholder={'captcha'} name={'captcha'}
//                    component={Input} validate={[required]}/>}
//
//             <div className={styles.login}>
//                 <Button onClick={props.handleSubmit} variant="outlined" color="primary">Login</Button>
//             </div>
//             {props.error && <div className={classes.formSummaryError}>
//                 {props.error}
//             </div>
//             }
//         </form>
//     )
// }
//
// const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
// const Login = (props) => {
//     const onSubmit = (formData) => {
//         props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
//     }
//
//     if (props.isAuth) {
//         return <Redirect to={`/profile`}/>
//     }
//
//     return (
//         <div className={styles.body}>
//             <div className={styles.wrap}>
//                 <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
//             </div>
//         </div>
//     )
// }
//
// const mapStateToProps = (state) => ({
//     isAuth: state.auth.isAuth,
//     authorizesUserId: state.auth.userId,
//     captchaUrl: state.auth.captchaUrl
// })
// export default connect(mapStateToProps, {login})(Login)

import React from 'react';
import styles from './Login.module.css';
import classes from '../common/FormsControls/FormsControl.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControl';
import { required } from '../../utils/validation/validators';
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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

            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && <Field placeholder={'captcha'} name={'captcha'}
                                        component={Input} validate={[required]}/>}

            <div>
                <button className={styles.login}>Login</button>
            </div>
            {props.error && <div className={classes.formSummaryError}>{props.error}</div>}
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
        // formData.email = ''
        // formData.password = ''
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