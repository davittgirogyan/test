import React from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Home = () => {
    const { isLoggedIn } = useSelector(state => state.auth);
    return(
        <div>
            {isLoggedIn ?
            <>
                <Button><NavLink to='/products'>All Products</NavLink></Button>
                <Button><NavLink to='/my-products' >My Products</NavLink></Button>
            </> : <h1>Please register and sign in to see products</h1>
            }
        </div>
    )
}

export default Home;