import {useState,useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from './styles'
import { slideIn } from '../utils/motion'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'

const Contact = () => {
  const formRef=useRef();
  const [form, setForm]= useState({
    name:"",
    email:"",
    message:""
  })

  const [loading,setLoading]=useState(false)

  const handleChange=(e)=>{
  const {name,value }= e.target;
  setForm({...form,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true)

    emailjs.send(
      'service_206ejpj', 
      'template_nmioud8', 
      {
        from_name:form.name,
        to_name:'Anjali',
        from_email:form.email,
        to_email:'anjaliroyrishra@gmail.com',
        message:form.message,
      },
      'WcB7B8h0t40x4YKeW'
    )
    .then(() => {
      setLoading(false)
      alert('Thank you I will get back to you as soon as possible.')
      setForm({
        name:"",
        email:"",
        message:"",
      },(error)=>{
        setLoading(false)
        console.log(error);
        alert('Something went wrong.')
      })
  })
}
  return (
    <div className='xl:mt-8 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left',"tween",0.2,1)}
      className='flex-1 bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact</h3>

        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className='flex flex-col mt-8 gap-7'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>What's your Name</span>
            <input 
            required
            type="text"
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="What's Your name"
            className='bg-tertiary py-3 px-6 placeholder:text-secondary placeholder:text-[15px]  text-white rounded-lg outline-none border-none' 
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>What's your Email</span>
            <input
            required 
            type="email"
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="What's Your Email"
            className='bg-tertiary py-3 px-6 placeholder:text-secondary placeholder:text-[15px]  text-white rounded-lg outline-none border-none ' 
            />
          </label>

          <label  className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
            required
            rows="5" 
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className='bg-tertiary py-3 px-6 placeholder:text-secondary placeholder:text-[15px] text-white rounded-lg outline-none border-none resize-none' 
            />
          </label>
          <div className='w-fit rounded-xl green-pink-gradient p-[1px] shadow-card'>
        <button 
        type='submit'
        className=' w-fit text-white font-bold bg-tertiary py-3 px-8 outline-none rounded-xl '>
          {loading?'Sending...':'Send'}
        </button>
        </div>
        </form>
      </motion.div>

      <motion.div
      variants={slideIn('right',"tween",0.2,1)}
      className='xl:flex-[0.75] xl:h-auto md:h-[550px] h-[350px]'>
<EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")
