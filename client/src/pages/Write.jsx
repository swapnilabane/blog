import { AiFillFileAdd } from 'react-icons/ai';

const Write = () => {
  return (
    <div className='main flex flex-col items-center h-screen mt-20'>
      <div className='image'>
        <img src='laptop.jpg' alt='Laptop' className='w-80 h-44 rounded-lg' />
      </div>
      <form className='mt-8'>
        <div className='flex items-center space-x-8'>
          <label
            className='text-sm font-medium text-gray-900 dark:text-white'
            htmlFor='file_input'
          >
            Upload an Image:
          </label>
          <input
            className='text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
            id='file_input'
            type='file'
          />
          <input
            type='text'
            placeholder='Title'
            className='border-b-2 outline-none w-56'
          />
        </div>
        <div className='mt-8'>
          <label
            className='block text-sm font-medium text-gray-900 dark:text-white'
            htmlFor='article_content'
          >
            Write your article:
          </label>
          <textarea
            placeholder='Start typing here...'
            id='article_content'
            cols='80'
            rows='8'
            className='w-full text-sm text-gray-800 bg-white border-2 rounded-lg focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400'
          ></textarea>
        </div>
        <button
          type='submit'
          className='inline-flex items-center px-5 py-2.5 mt-8 text-sm font-medium text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800'
        >
          <AiFillFileAdd className='mr-2' />
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default Write;
