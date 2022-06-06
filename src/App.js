import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import NotFound from './components/NOtFound/NotFound';
import Registration from './components/Registration/Registration';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Blogs from '../../my-11th-assignment-client/src/component/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/myservices' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>}>

        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;