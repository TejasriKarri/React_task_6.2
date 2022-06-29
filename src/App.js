import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetail from './components/MovieDetail/MovieDetail';
import MovieInfoDetails from './components/MovieInfoDetails/MovieInfoDetails'
function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>

        <Route exact path="/movies/:id" >
          <MovieDetail/>
        </Route>
      </Router>
    </div>

  );
}
export default App;
