import logo from './logo.svg';
import './App.css';
import AddShoppingcart from './components/AddShoppingcart';
import SearchShopping from './components/SearchShopping';
import DeleteShopping from './components/DeleteShopping';
import ViewShopping from './components/ViewShopping';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddShoppingcart/>}/>
      <Route path='/search' element={<SearchShopping/>}/>
      <Route path='/delete' element={<DeleteShopping/>}/>
      <Route path='/viewall' element={<ViewShopping/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
