import logo from "./logo.svg";
import "./App.css";
import ExpenseTracker from "./components/ExpenseTracker";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/expense" element={<ExpenseTracker />} />
          <Route exact path="/products" element={<ProductList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
