import capybara from './images/capybara.gif';
function About() {
const about = {
    title : "About",
    description : "Unleash your creativity and be part of Rebase<10>, a month-long online hackathon extravaganza! Compete across various categories, showcasing your skills, creativity, and teamwork alongside peers who share your passion. This is your chance to challenge yourself, learn new skills, and create remarkable projects that can make a real difference. Don't miss this unparalleled opportunity to rebase your talent and elevate your skills to a new level. Step into Rebase<10>—where creativity has no bounds."
};
  return (
    <div className='w-full bg-white relative overflow-x-hidden flex items-center justify-center px-[10%] flex-wrap gap-[2vh]'>
        <div className='flex flex-col relative w-full sm:w-[60%]'>
            <h1 className='text-white text-[calc(2.5vw+20px)] font-heading font-bold px-[2.5%] drop-shadow-brand'>{about.title}</h1>
           
            <p className=' text-brand text-[calc(1vw+10px)] font-primary font-thin px-[2.5%]'>{about.description}</p>
        </div>
        <img src={capybara} className='mx-auto' alt='capybara' />
    </div>
  );
}

export default About;
