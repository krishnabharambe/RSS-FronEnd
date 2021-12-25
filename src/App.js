import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { apiCall_CheckLogin, apiCall_FetchSliderData } from './Redux/apiCalls';
import { useDispatch, useSelector } from "react-redux";
import AccountRecovery from './Container/Auth/AccountRecovery';
import Login from './Container/Auth/Login';
import Register from './Container/Auth/Register';
import Home from './Container/Home/Home';
import LoadingPage from './Container/Components/LoadingPage';
import AllServices from './Container/Components/HomeComp/AllServices';
import SubServices from './Container/Components/HomeComp/SubServices';
import SubServiceDetail from './Container/Components/HomeComp/SubServiceDetail';
import CreateRequest from './Container/Components/HomeComp/CreateRequest';
import RequestedBooking from './Container/Components/BookingComp/RequestedBooking';


function App() {
  const dispatch = useDispatch();
  const globaluser = useSelector((state) => state.user);
  const [loading, setLoading] = React.useState(true);
  const [loginfailed, setLoginfailed] = React.useState(false);
  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      apiCall_CheckLogin(token, dispatch);
      apiCall_FetchSliderData(dispatch);
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
            <Route path="/allservices" element={<AllServices />} />
            <Route path="/services/:mainID" element={<SubServices />} />
            <Route path="/subservices/:subMainID" element={<SubServiceDetail />} />
            <Route path="/subservices/createRequest/:subMainID" element={<CreateRequest />} />
            <Route path="/Request/:RequestID" element={<RequestedBooking />} />
          </Routes>
        </div>

      }
    </div>
  );
}


function RequireAuth({ children }) {
  const globaluser = useSelector((state) => state.user);

  console.log("isAuth", globaluser.isAuth)
  if (!globaluser.isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}
export default App;