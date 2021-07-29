import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./index.css";
import Context, { AuthContext } from "./context";

export default function NavBar() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/profile">
            Profile
          </Link>
          <Link className="link" to="/dashboard">
            Dashboard
          </Link>
        </div>

        <Switch>
          <AuthContext>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </AuthContext>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const logger = useContext(Context);
  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>If not logged in can't access, Profile & Dashboard</h2>
      </div>
      {logger.loading ? (
        logger.loggedIn ? (
          "Loading..."
        ) : (
          "Loading..."
        )
      ) : logger.loggedIn ? (
        <button onClick={() => logger.logout()}>Logout</button>
      ) : (
        <button onClick={() => logger.login()}>Login</button>
      )}
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About:Public Route</h1>
    </div>
  );
}

function Profile() {
  const logger = useContext(Context);
  const loggedIn = logger.loggedIn;
  return (
    <Route>
      <h1>Profile</h1>
      {loggedIn ? "" : <Redirect to="/" />}
    </Route>
  );
}

function Dashboard() {
  const logger = useContext(Context);
  return (
    <Route>
      <h1>Dashboard</h1>
      {logger.loggedIn ? "" : <Redirect to="/" />}
    </Route>
  );
}
