import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">WebSiteName</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="/">Home</a></li>
              <li><a href="/page1">Page 1</a></li>
              <li><a href='/page2'>Page 2</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <section>

      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
