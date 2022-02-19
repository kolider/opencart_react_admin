import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import OrdersListContainer from "./components/Orders/OrdersContainer";
import Order from "./components/Order";
import PrivateOutlet from "./helpers/PrivateOutlet";
import LoginContainer from "./components/Login/LoginContainer";

const App = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginContainer/>}/>
            <Route path="/" element={<PrivateOutlet/>}>
                <Route path="orders" element={<OrdersListContainer />}/>
                <Route path="orders/:orderId" element={<Order/>}/>
            </Route>
            <Route path="*" element={<Navigate to="/login" replace/>}/>
        </Routes>
    )
}


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
