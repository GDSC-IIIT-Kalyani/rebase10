import banner from './images/banner.svg';
import instagram from './images/instagram.svg';
import twitter from './images/twitter.svg';
import discord from './images/discord.svg';
import youtube from './images/youtube.svg';
import logo from './images/logo.svg';

const sidebar = [
    { name: "Bio", href: "https://gdsc.bio.link/", icon: logo ,shrink:false },
    { name: "Instagram", href: "https://www.instagram.com/gdsciiitkalyani", icon: instagram, shrink:true },
    { name: "Twitter", href: "https://x.com/gdsciiitkalyani", icon: twitter, shrink:true },
    { name: "YouTube", href: "https://www.youtube.com/channel/UCvRPKamvUtnQhij5y1MF11A", icon: youtube, shrink:true },
    { name: "Discord", href: "https://discord.gg/ePBMbdKdKG", icon: discord, shrink:true },
]
function Onboarding() {

  return (
    <div className='w-full bg-white h-screen relative overflow-x-hidden'>
        <img src={banner} className='max-h-[28vh] max-w-[80%] mx-auto pt-[1.5vh]' alt='banner' />
        <div className='absolute left-[calc(4px+0.5%)] flex flex-col items-center w-[calc(40px+4%)] top-[15vh] gap-[2vh]'>
            {sidebar.map((item) => {
                return (
                    <a href={item.href} rel="noopener noreferrer" target="_blank" className='hover:scale-110 duration-700'>
                        <img src={item.icon} className={item.shrink?"w-[70%] mx-auto":""} alt={item.name}/>
                    </a>
                )
            })}
        </div>
    </div>
  );
}

export default Onboarding;
