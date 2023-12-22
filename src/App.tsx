import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { HomePage, AboutPage, NotFoundPage } from './pages';
import { Navigation } from './components';

export const App = () => {
  return (
    <>
      <Navigation />
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
