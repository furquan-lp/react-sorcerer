import { FiGithub } from "react-icons/fi";

export default function Header() {
  return (
    <header className='bg-nord0 p-1 md:p-2.5'>
      <span className='flex items-center justify-between md:w-2/3 md:mx-auto md:text-3xl text-xl'>
        <span className='flex items-center'>
          <img src='logo-transparent-medium.png' className='md:max-w-14 max-w-10 md:p-1 mx-1 md:mx-2'
            alt='wizard hat logo' />
          <a href='https://sorcerer.live/' className='font-logo font-bold select-none hover:underline'>sorcerer.live</a>
          <span className='font-logotext pl-8 text-nord4 hidden md:inline'>a magician never reveals his secrets</span>
        </span>
        <span className='flex items-center gap-x-2 md:gap-x-3 text-sm md:text-xl'>
          <span className='flex items-center'>
            <a href='/' className='text-nord1 bg-nord4 border border-r-0 border-nord4 md:p-1 p-0.5 underline
             hover:no-underline rounded-md rounded-r-none'>Editor</a>
            <a href='/about' className='hover:underline border border-nord4 border-l-0 rounded-l-none rounded-md p-0.5
             md:p-1'>About</a>
          </span>
          <a href='https://github.com/furquan-lp/react-sorcerer' className='text-base md:text-xl text-nord6
           md:text-nord4 md:hover:text-nord6 md:hover:text-2xl transition-all delay-200'><FiGithub /></a>
        </span>
      </span>
    </header>
  );
}