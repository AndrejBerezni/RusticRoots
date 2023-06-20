import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Account from './Components/Account/Account';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/shop' element = {<Shop />} />
        <Route path='/account' element = {<Account />} />
        <Route path='*' element = {<Home />} />
      </Routes>
    </div>
  );
}

export default App;
