import { styles } from './styles'
import { SectionWrapper } from '../hoc'
import { FaLinkedin,FaInstagram,FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <section className='relative w-full h-screen mx-auto '>
      <div className='flex-1'>
      <div className={`absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
    <div className='flex flex-col justify-center items-center mt-5'>
      <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
      <div className='w-1 sm:h-80 h-60 violet-gradient'/>
    </div>
    <div>
    <h1
    className={`${styles.heroHeadText}`}>
      Hi, I'm <span className='text-[#915eff]'>Anjali</span></h1>
    <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop Interactive, user <br className='sm:block hidden'/> interfaces and web applications </p>
<div className='flex flex-row gap-8 mt-10 '>
<a href="https://www.linkedin.com/in/anjalik25">
<FaLinkedin className='h-10 w-10 text-blue-500'/>
</a>
<a href="https://personal-portfolio-anjali.netlify.app/">
<FaInstagram className='h-10 w-10 text-white rounded-xl' style={{background:'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'}}/>
</a>
<a href="https://github.com/anjali251999">
<FaGithub className='h-10 w-10 text-white rounded-full bg-black'/>
</a>

</div>
    </div>
</div>
</div>
    </section>
  )
}

export default SectionWrapper(Home,"")
