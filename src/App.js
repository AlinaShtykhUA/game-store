import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux";

import { Header } from "./components/header";
import { HomePage } from "./pages/home-page";
import { GamePage } from "./pages/game-page";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/app/:title" element={<GamePage/>} />
          </Routes>
        </div>
      </Router>
    </Provider>
    
  )
}

export default App
