import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Shop from './Components/Shop';
import ProductDetail from './Components/ProductDetail';


const App = () => {
  return(
    <>
      <div>
        <Header />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={ProductDetail} />
      </Switch>
    </>
  );
}
export default App;
