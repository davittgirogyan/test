import { Route  } from 'react-router-dom'
import { useSelector } from 'react-redux';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './layouts/Header/Header';

import './App.css';
import Products from './components/Products/Products';
import MyProducts from './components/MyProducts/MyProducts';



const App = () => {
  const {isLoggedIn} = useSelector(e => e.auth);
  return (
    <div className="App">
      <Header/>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/' exact component={Home} />
        {/* logged in routes */}
        {isLoggedIn && <>
        <Route path='/products' exact component={Products} />
        <Route path='/my-products' exact component={MyProducts} />
        </>
       }
    </div>
  );
}

export default App;
