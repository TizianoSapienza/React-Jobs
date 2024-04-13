import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-white bg-sky-600 hover:bg-sky-500 hover:text-white rounded-lg px-3 py-2 font-semibold'
      : 'text-white hover:bg-sky-500 hover:text-white rounded-lg px-3 py-2 font-semibold';

  return (
    <>
      <nav className="bg-zinc-800 border-b border-sky-800">
        <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* <!-- Logo --> */}
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <img className="h-10 w-auto text-white" src={logo} alt="Logo" />
                <span className="hidden md:block text-white text-3xl font-bold ml-4 hover:underline decoration-sky-600">
                  IT Jobs
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to="/" className={linkClass}>
                    Home
                  </NavLink>
                  <NavLink to="/jobs" className={linkClass}>
                    Job List
                  </NavLink>
                  <NavLink to="/add-job" className={linkClass}>
                    Add Job
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
