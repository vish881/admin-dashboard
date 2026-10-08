import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Sidebar />

        <main>

          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/users" element={<Users />} />

            <Route path="/products" element={<Products />} />

            <Route path="/orders" element={<Orders />} />

            <Route path="/settings" element={<Settings />} />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;