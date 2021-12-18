import React, { useEffect } from 'react';
import Auth from './AppViews/AuthViews/Auth';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './AppViews/HomePage/Home';
import Login from './AppViews/AuthViews/Login';
import Register from './AppViews/AuthViews/Register';
import axios from 'axios';
import { apiCall_CheckLogin } from './Redux/apiCalls';
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import LoadingPage from './AppViews/HomePage/LoadingPage';
import AccountRecovery from './AppViews/AuthViews/AccountRecovery';


function App() {
  const dispatch = useDispatch();
  const globaluser = useSelector((state: RootStateOrAny) => state.user);
  const [loading, setLoading] = React.useState(true);
  const [loginfailed, setLoginfailed] = React.useState(false);
  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      apiCall_CheckLogin(token, dispatch);
    } else {
      console.log("no token found");
      setLoginfailed(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
<div>
{loading ? <div><LoadingPage /></div> :
    <div>
      <Routes>
        <Route
            path="/"
            element={
              <RequireAuth>
               <Home />
              </RequireAuth>
            }
          />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/accountRecovery" element={<AccountRecovery />} />
      </Routes>
    </div>

}
</div>
  );
}


function RequireAuth({ children }: { children: JSX.Element }) {
  const globaluser = useSelector((state: RootStateOrAny) => state.user);

console.log("isAuth", globaluser.isAuth)
  if (!globaluser.isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}
export default App;
