export default function Footer() {
  return (
    <footer className='flex bg-nord0 text-nord4 p-4 md:px-8 md:pt-6 sticky top-[100vh] text-xs md:text-sm'>
      <div className='flex justify-between w-full md:w-2/3 md:mx-auto'>
        <div className='flex flex-col gap-y-3 flex-wrap w-2/3 md:flex-nowrap'>
          <span>Copyright &copy; 2024 Syed Furquan Ahmad</span>
          <span>Powered by DigitalOcean</span>
          <span>This website is licensed under the Apache License 2.0. See the <a
            href='https://raw.githubusercontent.com/furquan-lp/react-sorcerer/master/LICENSE'
            className='underline hover:no-underline'>LICENSE</a> for more details.
          </span>
          <span className='flex gap-x-1'>
            <span>This site uses the <a href='https://www.nordtheme.com/' className='underline hover:no-underline'>Nord
              theme</a> colors</span>
            <span className='p-2.5 m-1.5 md:p-2 md:m-0.5 rounded-full bg-nord7' />
            <span className='p-2.5 m-1.5 md:p-2 md:m-0.5 rounded-full bg-nord8' />
            <span className='p-2.5 m-1.5 md:p-2 md:m-0.5 rounded-full bg-nord9' />
            <span className='p-2.5 m-1.5 md:p-2 md:m-0.5 rounded-full bg-nord7' />
          </span>
        </div>
        <div className='flex flex-col gap-y-4 text-sm md:text-base'>
          <span className='flex flex-col gap-y-2 md:flex-row justify-between gap-x-1 md:gap-x-10'>
            <a href='https://frontend.nextdev.in/' className='hover:text-nord7 hover:underline transition-all
             delay-200'>
              More Frontend
            </a>
            <a href='https://nextdev.in/' className='hover:text-nord7 hover:underline transition-all
             delay-200'>
              NEXTDEV
            </a>
          </span>
          <hr className='border-nord3' />
          <span className='flex flex-col gap-y-2 md:flex-row justify-between gap-x-1 md:gap-x-10'>
            <a href='https://api.nextdev.in/resume.pdf' className='hover:text-nord7 hover:underline transition-all
             delay-200'>
              Resume
            </a>
            <a href='mailto:syed@nextdev.in' className='hover:text-nord7 hover:underline transition-all
             delay-200'>
              Contact
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}