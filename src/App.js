import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Missions from './components/Missions';
import NavComponent from './components/NavComponent';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

const App = () => {
  const NotMatch = () => (
    <>
      <div>
        No Match Found for the page
      </div>
    </>
  );

  return (
    <>
      <BrowserRouter>
        <NavComponent />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
