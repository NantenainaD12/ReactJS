import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Homepage from "./pages/Homepage";
import Details from "./pages/Details_encher";
import LoginPage from "./pages/LoginPage";
import Encherir from "./pages/Encherir";
import Product_milay from "./Model/Product";
import Product_mine from "./Model/Product_mine";
import testcss from "./Model/testcss";

function App() {
  return(
      <div>
        <Router>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Product_milay}/>
              <Route exact path="/details" component={Details}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/Encherir" component={Encherir}/>
                <Route exact path="/Product_milay" component={Product_milay}/>
                <Route exact path="/ownEncher" component={Product_mine}/>
            </Switch>
          </div>
        </Router>
        <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"/>
      </div>
  )
}

export default App;