import Join from '@/pages/Join';
import Login from '@/pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
