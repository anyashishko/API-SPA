import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import UsersList from './pages/UsersList';
import UserDetail from './pages/UserDetail';
import AlbumList from './pages/AlbumList'; 
import AlbumDetail from './pages/AlbumDetail';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/albums" element={<AlbumList />} />  // Изменено здесь
        <Route path="/albums/:albumId" element={<AlbumDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
