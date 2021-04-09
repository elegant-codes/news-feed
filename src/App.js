import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"
import Homepage from './components/Homepage'
import NewsDetails from './components/NewsDetails'
import Navbar from './components/Navbar'



const App = () => {
  
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path='/'  component={ Homepage } exact />
          <Route path='/news/:id'  component={ NewsDetails } />
        </Switch>

    </Router>
  );
}

export default App;
