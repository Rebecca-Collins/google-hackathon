import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AccessibilityPage from './pages/AccessibilityPage/AccessibilityPage';
import Header from './components/Header/Header.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/accessibility' element={<AccessibilityPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* <p>home page</p>
      <ul>
        <li>Basic Info component</li>
        <li>Contact info component</li>
        <li>Accessibility component</li>
        <li>Profiles component</li>
        <li>General Preferences for the web</li>
      </ul>
      <p>accessibility page</p>
        <div>Card with bunch of toggles for whatever disabilities UX gives us</div> */
    

