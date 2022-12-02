import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccessibilityPage from "./pages/AccessibilityPage/AccessibilityPage";
import Header from "./components/Header/Header.js";
import { useState } from "react";

function App() {
  const [largeText, setLargeText] = useState(false);
  const handleLargeText = () => {
    setLargeText(!largeText);
  };

  return (
    <div className={`App ${largeText ? "large-text" : ""}`}>
      <BrowserRouter>
        <Header handleLargeText={handleLargeText} />
        <Routes>
          <Route
            path="/"
            element={<AccessibilityPage handleLargeText={handleLargeText} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
