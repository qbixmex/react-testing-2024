import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import { HomePage, AboutPage, NotFoundPage } from './pages';

export const App = () => {
  return (
    <>
      <nav>
        <ul style={{ display: 'flex', gap: '10px' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

const WrappedApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default WrappedApp;
