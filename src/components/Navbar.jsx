import {useState} from 'react'
import {styles} from './styles'
import { navLinks } from '../constants'
import {logo,menu,close,github} from '../assets'

const Navbar = () => {
    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}>
<div className='w-full flex justify-between items-center  mx-auto'>
        <a href='#' className='flex items-center gap-2' 
    onClick={()=>{
        setActive("")
        window.scrollTo(0,0)
        }}>
            <img src={logo} className="sm:w-16 sm:h-16 w-12 h-12 object-contain" alt="logo" />
            <p className='text-white text-[16px] sm:text-[18px] font-semibold cursor-pointer'>Anjali <span className='sm:block hidden text-[18px]'>| FullStack Developer</span></p>
        </a>
        <ul className='hidden lg:flex flex-row md:ml-[-200px] gap-8 lg:gap-10 border-[#915eff] border-[0.01px] py-2 px-6 rounded-full'>
            {navLinks.map((item)=>
            <li key={item.id} 
            className={`${active===item.title ? "text-[#915eff] " : "text-white"} hover:text-[#915eff] lg:text-[16px] text-[14px] cursor-pointer `}
            onClick={()=>{setActive(item.title)}}>
                <a href={`#${item.id}`}>{item.title}</a>
            </li>
            )}
        </ul>
        <a href="https://github.com/anjali251999" className='hidden lg:block'>
            <img src={github} className="w-12 h-12 object-contain" alt="logo" />
        </a>

     {/* phone-view */}
        <div className='lg:hidden flex flex-1 justify-end items-start'>
            <img src={toggle ? close : menu} alt="menu" 
            className='w-[30px] h-[34px] object-contain cursor-pointer'
            onClick={()=>{setToggle(!toggle)}}
            />
            <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex flex-col justify-end items-start gap-2'>
            {navLinks.map((Link)=>
            <li key={Link.id} 
            className={`${active===Link.title ? "text-[#915eff] " : "text-white"} hover:text-[#915eff] text-[14px] font-medium cursor-pointer font-poppins`}
            onClick={()=>{
                setToggle(!toggle)
                setActive(Link.title)}}>
                <a href={`${Link.id}`}>{Link.title}</a>
            </li>
            )}
        </ul>
            </div>
        </div>
</div>
    </nav>
  )
}

export default Navbar
