import React, { useEffect } from 'react';
import { PageHeader, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';


import './Header.scss';
import { login, logout } from '../../store/action-creators/authActionCreators';

const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        const token = +localStorage.getItem('token');
        if (token) {
            const users = JSON.parse(localStorage.getItem('users'));
            if (Array.isArray(users) && users.length) {
                const user = users.find(e => e.id === token);
                if (user) {
                    dispatch(login({email: user.email, password: user.password}));
                }
            }

        }
    },[dispatch]);
    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        history.push('/')
    }
    const { isLoggedIn, email } = useSelector(state => state.auth);
    return <div  className="site-page-header-ghost-wrapper">
         <PageHeader
            className="site-page-header"
            title={<div>
                <NavLink to='/'>Home</NavLink>
            </div>}
            subTitle={email || ''}
            extra={
                isLoggedIn 
                ? <Button onClick={handleLogout} >Logout</Button>
                : <>
                    <NavLink to="/login"><Button>Login</Button></NavLink>
                    <NavLink to="/register"><Button>Register</Button></NavLink>
                </>
            }
        />
    </div>
}

export default Header;