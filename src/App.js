import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Components/Product';
import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart';
import {createBrowserRouter, RouterProvider, createRoutesFromElements,Route} from 'react-router-dom';
import RootLayout from './Components/RootLayout';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  path='/' element={<RootLayout/>}>
        <Route index element={<Dashboard/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
