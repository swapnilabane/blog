import Categories from '../components/Categories';
import Posts from '../components/Posts';

const Home = () => {
  return (
    <div className='relative md:mx-36'>
      <img src='laptop1.jpg' alt='laptop' className='w-full h-[38rem]' />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>
          Discover, Learn, and Share Amazing Stories
        </h1>
        <h3 className='text-lg md:text-xl'>
          Dive into a collection of thought-provoking articles, compelling
          stories, and expert perspectives. Unleash your curiosity and discover
          a wealth of knowledge waiting to be explored.
        </h3>
      </div>
      <Posts />
      <Categories />
    </div>
  );
};
export default Home;
