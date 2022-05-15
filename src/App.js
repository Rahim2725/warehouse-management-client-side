import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/Footer/Footer';
import Login from './pages/Login/Login/Login';
import Blogs from './pages/Blogs/Blogs';
import Register from './pages/Login/Register/Register';
import Home from './pages/Home/Home/Home';
import Header from './pages/Home/Header/Header';
import Products from './pages/Products/Products';
import ProductDetail from './pages/productDetail/ProductDetail';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import AddProduct from './pages/AddProduct/AddProduct';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import MyProduct from './pages/MyProduct/MyProduct';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/products' element={
          <RequireAuth>
            <Products></Products>
          </RequireAuth>}></Route>

        <Route path='/product/:productId' element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>
        }></Route>

        <Route path='/addProduct' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>

        <Route path='/myproduct' element={
          <RequireAuth>
            <MyProduct></MyProduct>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
