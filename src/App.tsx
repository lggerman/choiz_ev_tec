import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeView from "view/HomeView";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeView}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
