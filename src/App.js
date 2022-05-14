import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/Footer/Footer';
import Login from './pages/Login/Login/Login';
import Blogs from './pages/Blogs/Blogs';
import Register from './pages/Login/Register/Register';
import Home from './pages/Home/Home/Home';
import Header from './pages/Home/Header/Header';
import Products from './pages/Products/Products';
import ProductDetail from './productDetail/ProductDetail';

function App() {
  return (
    <div >
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/products' element={<Products></Products>}></Route>
       <Route path='/product/:productId' element={<ProductDetail></ProductDetail>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
