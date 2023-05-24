import { Provider } from 'react-redux';
import createStore from './Store';
import Products from './Components/Products/index'
import Category from './Components/Categories/index';
import Header from './Components/Header/index'
import Cart from './Components/Cart/';

import './App.scss';

function App() {
  return (
    <>
    <Header />
    <Provider store={createStore()}>
      <Category />
      <Cart />
      <Products />
    </Provider>
    </>
  );
}

export default App;
