import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import AboutUs from "./pages/AboutUs/AboutUs";
import AddTours from "./pages/AddTours/AddTours";
import Home from "./pages/HomePage/Home/Home";
import Login from "./pages/Login/Login";
import ManageOrders from "./pages/ManageOrders/ManageOrders";
import MyOrders from "./pages/MyOrders/MyOrders";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Footer from "./pages/SharedPage/Footer/Footer";
import Header from "./pages/SharedPage/Header/Header";
import TourDetails from "./pages/TourDetails/TourDetails";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/myOrders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path='/manageOrders'>
              <ManageOrders></ManageOrders>
            </Route>
            <Route exact path='/about'>
              <AboutUs></AboutUs>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/tourDetails/:id'>
              <TourDetails></TourDetails>
            </PrivateRoute>
            <PrivateRoute path='/addTours'>
              <AddTours></AddTours>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
