import { Link } from 'react-router-dom';
import banner_img from '../src/assets/hero_book.jpg'


const Banner = () => {
  return (
    <div className='my-4 md:my-9'>
      <div className="hero md:h-[70vh] bg-[#F3F8FF] w-4/5 mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner_img}
            className="w-32 md:w-64 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">Books to freshen up your bookshelf</h1>
           <Link to='/listedBook'>
           <button className="mt-4 md:mt-10 btn bg-[#E26EE5] text-white hover:bg-white hover:text-[#E26EE5] border hover:border-[#E26EE5]">View The List</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
