import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Write from './pages/Write';
import Header from './components/Header';
import Footers from './components/Footers';
import Profile from './pages/Profile';
import SinglePage from './pages/SinglePage';

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>
        <main className='flex-grow'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/sign-up' element={user ? <Home /> : <SignUp />} />
            <Route path='/sign-in' element={user ? <Home /> : <SignIn />} />
            <Route path='/write' element={user ? <Write /> : <SignUp />} />
            <Route path='/post/:id' element={<SinglePage />} />
            <Route
              path='/profile'
              element={user ? <Profile /> : <SignUp />}
            ></Route>
          </Routes>
        </main>
        <Footers />
      </div>
    </BrowserRouter>
  );
}

export default App;
