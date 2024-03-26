import { NavLink } from "react-router-dom";

const Header = () => {
    const links= <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/listedBook'>Listed Books</NavLink></li>
        <li><NavLink to='/pageToRead'>Pages to Read</NavLink></li>
    </>
  return (
    <div className="navbar bg-base-100 w-4/5 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl gap-0 text-[#E26EE5] font-semibold">Bookish<span className="text-[#7E30E1]">Bliss</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {links}
        </ul>
      </div>
      <div className="navbar-end md:space-x-4 hidden md:block">
        <a className="btn bg-[#E26EE5] text-white hover:bg-white hover:text-[#E26EE5] border hover:border-[#E26EE5]">Sing In</a>
        <a className="btn bg-[#7E30E1] text-white hover:bg-white hover:text-[#7E30E1] border hover:border-[#7E30E1]">Sing Up</a>
      </div>
    </div>
  );
};

export default Header;
