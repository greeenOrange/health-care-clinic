
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/MainHome/Home/Home';
import Error from './Pages/NotFound/Error';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import PrivetRoute from './Pages/Login/PrivetRoute/PrivetRoute';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
    <Header></Header>
      <Switch>
      <Route exact path='/'>
      <Home></Home>
      </Route>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <PrivetRoute path='/booking/:bookingId'>
        <Booking></Booking>
        </PrivetRoute>
        <Route path='*'>
          <Error></Error>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
    
    </div>
  );
}

export default App;
