import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth.js';
import Items from './components/Items/Items.js';
import { useUser } from './context/UserContext.js';
import Header from './components/Header/Header.js';

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/items" component={Items} />
        <Route exact path="/">
          <>
            {user && <Redirect to="/items" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
