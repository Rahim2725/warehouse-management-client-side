import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import Login from './pages/Login/Login/Login';
import Blogs from './pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
