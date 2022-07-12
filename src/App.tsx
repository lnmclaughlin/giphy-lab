import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Details from "./components/Details";
import Favorites from "./components/Favorites";

//routing should always happen in app.tsx
//what is in router is alway seen, what is in routes and route arent
//what is in route is essentially an if statement - this or that
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details/:id" element={<Details />} />
          {/* wildcard: (redirect to "/", which renders Main) */}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
