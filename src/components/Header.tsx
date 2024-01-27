export default function Header() {
  return (
    <header className='flex bg-nord0 p-2.5'>
      <span className='flex items-center md:w-2/3 md:mx-auto text-3xl'>
        <img src='logo-transparent-medium.png' className='max-w-14 p-1 mx-2' alt='wizard hat logo' />
        <span className='font-logo font-bold select-none'>sorcerer.live</span>
        <span className='font-logotext pl-8 text-nord4'>a magician never reveals his secrets</span>
      </span>
    </header>
  );
}