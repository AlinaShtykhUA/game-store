import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux";

import { Header } from "./components/header";
import { HomePage } from "./pages/home-page";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          
          <Routes>
            <Route index element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
    
  )
}

export default App
