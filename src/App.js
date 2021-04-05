import Join from "page/Join/Join";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "App.css"
import Header from "layouts/Header";
import Login from "page/Login/Login";
import Main from "page/Main/Main";

function App() {
  return (
    <Router>
      <div id="container">
        <Header />

        <div id="main">
          <div id="content">
              <Route exact path="/" component={Main} />
              <Route path="/join" component={Join} />
              <Route path="/login" component={Login} />
          </div>
        </div>
      </div>
  </Router>
  );
}

export default App;
