
import './App.css';
import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <div className="App">
     <Router>
      <GlobalStyles/>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Contact" exact component={Contact} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
