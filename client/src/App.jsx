import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Write from './pages/Write';
import Header from './components/Header';
import Footers from './components/Footers';

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>
        <main className='flex-grow'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/write' element={<Write />} />
          </Routes>
        </main>
        <Footers />
      </div>
    </BrowserRouter>
  );
}

export default App;
