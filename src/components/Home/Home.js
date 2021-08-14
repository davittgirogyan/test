import React from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';


const Home = () => {
    return(
        <div>
            <Button><NavLink to='/products'>All Products</NavLink></Button>
            <Button><NavLink to='/my-products' >My Products</NavLink></Button>
        </div>
    )
}

export default Home;