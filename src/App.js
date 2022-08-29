import HomePage from './components/pages/Homepage';
import AuthContext from './components/store/auth-context'
import { useContext } from 'react'
import React ,{ useState  } from 'react'
import './style.css';
import Welcome from './components/pages/Welcome';
import {Routes ,Route , Navigate} from 'react-router-dom'
import ForgotPassword from './components/pages/ForgotPassword';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function App() {
  const [loginsucess ,setloginsucess ] = useState(false)

const isLoggedIn =useSelector( state =>state.auth.isLoggedIn )
  // const authctx = useContext(AuthContext)
 
  return (
    <>
    <h1>Expense Tracker </h1>

     { isLoggedIn && <Navigate to={'/homepage'}/>} 

      <Routes>
        <Route exact path='/welcome/*' element={<Welcome/>}/>
        <Route exact path='/homepage' element={<HomePage/>}/>
        <Route path='/forgot' element={<ForgotPassword/>}/>
      </Routes>
    </>
  );
}

export default App;
