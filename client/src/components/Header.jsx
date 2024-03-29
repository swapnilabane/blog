import { Button, Navbar } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/ContextProvider';

const Header = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const { dispatch, user } = useContext(Context);

  // console.log(user);

  const handleLogout = async () => {
    dispatch({ type: 'LOGOUT' });

    await new Promise((resolve) => setTimeout(resolve, 0));

    localStorage.removeItem('user');

    navigate('/');
  };

  return (
    <Navbar className='border-b-2 md:mx-36'>
      <Link
        to='/'
        style={{ marginLeft: '0' }}
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <img src='logo.png' alt='logo' className='w-16 h-10 rounded-md' />
      </Link>

      <div className='flex gap-5 md:order-2'>
        {user ? (
          <Link to='/profile'>
            {user.profilePic ? (
              <img
                src={user.profilePic}
                alt='profile'
                className='w-10 h-10 rounded-full'
              />
            ) : (
              <div className='w-10 h-10 rounded-full bg-gray-300'></div>
            )}
          </Link>
        ) : (
          <>
            <Link to='/sign-in'>
              <Button gradientDuoTone='purpleToBlue'>Sign In</Button>
            </Link>

            <Link to='/sign-up'>
              <Button outline gradientDuoTone='purpleToBlue'>
                Sign Up
              </Button>
            </Link>
          </>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'> Home </Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'> About </Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/write'} as={'div'}>
          <Link to='/write'> Write </Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/'} as={'div'}>
          {user && (
            <Link to='/' onClick={handleLogout}>
              Logout
            </Link>
          )}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
