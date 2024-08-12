import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from './styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon, color }) => {
  return (
    <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className={`bg-tertiary rounded-[20px] py-3 md:py-5 px-6 sm:px-12 flex items-center justify-center flex-col`}>
          <img src={icon} alt={title} className='w-16 sm:w-20 h-16 sm:h-20 object-contain' />
          <h3 className={`text-[28px] sm:text-[40px] font-bold text-center`} style={{ color: color }} >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Hello! I'm a skilled MernStack developer with experience in JavaScript, Git and version control system and expertise in frameworks like React.js, redux, Node.js, Tailwind, Bootstrap. I'm focused on creating responsive, user-friendly web applications with high-quality code and innovative solutions for my clients, utilizing the latest frontend technologies and frameworks. Let's work together to bring your idea into real life!
      </motion.p>
      <div className='mt-10 flex  gap-10'>
        {services.map((item, index) => (
          <ServiceCard key={item.title} index={index} {...item} />
        ))}
      </div>
     
    </>
  );
};

export default SectionWrapper(About, "about");
