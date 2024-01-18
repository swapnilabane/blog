import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='bg-white p-4 rounded shadow-md'>
      <h1 className='text-xl font-bold mb-2'>Categories</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div>
          <ul className='list-disc pl-4'>
            <li>
              <Link
                to='/category/react'
                className='text-blue-500 hover:underline'
              >
                React
              </Link>
            </li>
            <li>
              <Link
                to='/category/javascript'
                className='text-blue-500 hover:underline'
              >
                JavaScript
              </Link>
            </li>
            <li>
              <Link
                to='/category/nextjs'
                className='text-blue-500 hover:underline'
              >
                Next.js
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className='list-disc pl-4'>
            <li>
              <Link
                to='/category/nodejs'
                className='text-blue-500 hover:underline'
              >
                Node.js
              </Link>
            </li>
            <li>
              <Link
                to='/category/mongodb'
                className='text-blue-500 hover:underline'
              >
                MongoDB
              </Link>
            </li>
            <li>
              <Link
                to='/category/microservices'
                className='text-blue-500 hover:underline'
              >
                Microservices
              </Link>
            </li>
            <li>
              <Link
                to='/category/tailwindcss'
                className='text-blue-500 hover:underline'
              >
                Tailwind CSS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
