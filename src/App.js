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
import { OrderPage } from "./pages/order-page";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/app/:title" element={<GamePage/>} />
            <Route path="/order" element={<OrderPage/>} />
          </Routes>
        </div>
      </Router>
    </Provider>
    
  )
}

export default App
