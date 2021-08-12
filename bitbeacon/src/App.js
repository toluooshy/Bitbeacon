import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import { Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProfilePage from "./pages/ProfilePage";
import ItemsPage from "./pages/ItemsPage";
import MapPage from "./pages/MapPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/items" component={ItemsPage} />
      <Route exact path="/map" component={MapPage} />
      <Route exact path="/settings" component={SettingsPage} />
    </div>
  );
}

export default App;
