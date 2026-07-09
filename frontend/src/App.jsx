import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/notifications"
            element={<Notifications />}
          />

          <Route
            path="/analytics"
            element={<h1>Analytics (Coming Soon)</h1>}
          />

          <Route
            path="/settings"
            element={<h1>Settings (Coming Soon)</h1>}
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;