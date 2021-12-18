import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import Home from '../HomePage/Home';
import Register from './Register';
import Login from './Login';


export default function Auth() {
    const globaluser = useSelector((state: RootStateOrAny) => state.user);

    return (
        <div>
            <Routes>   
                 <Route path="/" element={<Home />} />
                 <Route path="/login" element={<Login />} />
                 <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    )
}
