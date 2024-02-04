import './App.css';
import About from './components/About.js';
import Home from './components/Home.js'
import Contact from './components/contact.js'
import Navbar from './Layout/Navbar.js';
// import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import EditUser from './User/EditUser.js';
import AddUser from './User/AddUser.js';
import View from './User/View.js';
import Login from './signup_login/login.js';
import Signup from './signup_login/signup.js';






function App() {
  return (
    //version 6
    <div className="App">
      <Navbar />

      <Routes>
      <Route exact path="/" element={<Signup/>} />

        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/details" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/user/add" element={<AddUser />} />
        <Route exact path="/users/edit/:id" element={<EditUser />} />
        <Route exact path="/users/:id" element={<View />} />



      </Routes>
    </div>






    //version 5

    //     {/* <Router>
    //     <div className="App">
    //     <Navbar/>
    // <Switch>
    // <Route exact path="/" component={Home} />
    //  <Route exact path="/about" component={About} />
    //   <Route exact path="/contact" component={Contact} />
    // </Switch>

    //     </div>
    //     </Router> */}

  )
}

export default App;
