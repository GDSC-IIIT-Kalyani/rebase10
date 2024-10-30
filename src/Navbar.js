import logo from './images/rebase.svg';
import bars from './images/bars.svg';
import { useState } from 'react';
const navigation = [
  { name: "About", href: "#", current: false },
  { name: "Timeline", href: "#", current: false },
  { name: "Tracks", href: "#", current: false },
  { name: "Prizes", href: "#", current: false },
  { name: "Sponsors", href: "#", current: false },
  { name: "FAQ", href: "#", current: false },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className='w-full bg-white flex justify-between items-center'>
      <img src={logo} className='px-[1%] py-[calc(0.25%+4px)] max-w-[30%] max-h-[10vh]' alt='rebase-logo' />
      <div className='flex flex-col sm:flex-row justify-end sm:items-center items-end max-w-[60%] px-[2%]'>
        <img className="sm:hidden aspect-square w-[calc(5%+8px)] bg-brand m-[2%]" src={bars} alt="bars" onClick={toggleMenu}/>
        {navigation.map((item) => (
          <a href={item.href} className={`text-brand text-[calc(1.5vw+10px)] font-primary font-thin px-[2.5%] hover:scale-125 duration-700 sm:block ${isOpen? "block" : "hidden" } ${item.current? "text-white":""}`} key={item.name}>{item.name}</a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
