import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { Header } from "./components/header"
import { HomePage } from "./pages/home-page"

function App() {
  return (
    <Router>
        <div className="App">
          <Header />
          
          <Routes>
            <Route index element={<HomePage />} />
          </Routes>
        </div>
    </Router>
  )
}

export default App
