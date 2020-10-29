import './assets/main.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage  from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';





function App() {
  return (
    <div className="container">
      <Router>
        <Switch> 
        <Route path="/products">
            <ProductsPage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
