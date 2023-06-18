import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomPage';
import MyCart from './Components/MyCart';
import { useSelector, useDispatch } from 'react-redux';
import { fecthData } from './redux/actions';


import './App.css';



function App() {
  // const loading = useSelector((state) => state.data.loading);
  const data = useSelector((state) => state.data.data);
  // const error = useSelector((state) => state.data.error);

  const dispatch = useDispatch();



  useEffect(()=>{
      dispatch(fecthData());
  }, [dispatch])



  return (
      <BrowserRouter>
            <NavBar />
            
            <Routes>
                <Route path="/" element={<HomePage products={data}/>} />
                <Route path="myCart" element={< MyCart/>} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
