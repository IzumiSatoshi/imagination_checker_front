/** @jsxImportSource @emotion/react */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Top } from './pages/Top';
import { Result } from './pages/Result';
import { About } from './pages/About';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Top} exact />
          <Route path="/result" component={Result} exact />
          <Route path="/about" component={About} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
