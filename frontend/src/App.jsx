import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/notifications" element={<h1>Notifications</h1>} />
          <Route path="/analytics" element={<h1>Analytics</h1>} />
          <Route path="/settings" element={<h1>Settings</h1>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;