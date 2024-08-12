import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { styles } from './styles';
import { projects } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';
import web from '../assets/web.png'

const ProjectCard = ({ project, index }) => {
  return (
    <VerticalTimelineElement
      className="mb-[4rem] md:mb-[12rem]"
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={
        <Tilt className='xs:w-[220px] w-full mt-12'>
          <motion.div
            variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
            className='w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card '
          >
            <div
              options={{
                max: 45,
                speed: 450,
              }}
              className='bg-tertiary rounded-[20px] p-1 w-full min-h-full md:min-w-[400px] md:min-h-[250px] flex justify-center items-center flex-col'
            >
              <img src={project.image} alt={project.title} className='rounded-[20px] w-[400px] h-[250px] object-cover' />
            </div>
          </motion.div>
        </Tilt>
      }
      iconStyle={{ background: project.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img src={web} alt={project.company_name} className='w-[90%] h-[90%] rounded-full object-fill' />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[23px]'>{project.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: '0' }}>
          {project.company_name}
        </p>
        <p className='mt-5 list-disc ml-5 text-white-100 text-[14px] pl-1'>{project.points}</p>
      </div>

      <ul className='mt-3 flex flex-wrap gap-2'>
        {project.tags.map((tag, index) => (
          <li key={`project-tag-${index}`} className={`text-[14px] tracking-wider ${tag.color}`}>
            #{tag.name}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WHAT I HAVE DONE SO FAR</p>
        <h2 className={styles.sectionHeadText}>Latest Work</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="#915eff">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </VerticalTimeline>
      </div>
      </>
  );
};

export default SectionWrapper(Works,"work");
