import Join from "page/Join/Join";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "App.css"
import Header from "layouts/Header";

function App() {
  return (
    <Router>
      <div id="container">
        

        <div id="main">
          <div id="content">
            <div className="page_aticle">
              <Route path="/join" component={Join} />
            </div>
          </div>
        </div>
      </div>
  </Router>
  );
}

export default App;
