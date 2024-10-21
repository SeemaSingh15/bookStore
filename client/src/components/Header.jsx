import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className='shadow-md bg-slate-200'>
      <div className='flex items-center justify-between max-w-6xl p-3 mx-auto'>
        <h1 className='flex flex-wrap text-sm font-bold sm:text-xl'>
          <span className='text-slate-500'>book</span>
          <span className='text-slate-700'>Store</span>
        </h1>
        <form className='flex items-center p-3 rounded-lg bg-slate-100'>
          <input type='text' placeholder='Search...'
          className='w-24 bg-transparent focus:outline-none sm:w-64'/>
          <FaSearch className='text-slate-600'/>

        </form>
        <ul className='flex-gap-4'>
          <li className='hidden sm:inline text-slate-700 hover:underline'>
            Home
          </li>
          <li>About</li>
          <li>Sign in</li>
        </ul>
      </div>
      
    </header>
  );
}
