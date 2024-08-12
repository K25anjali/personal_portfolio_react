import { motion } from "framer-motion";
import { tech } from "../constants";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full pt-8 pb-4 sm:pt-12 sm:pb-8 rounded-tl-3xl rounded-tr-3xl bg-tertiary">
      <div className="relative flex overflow-hidden whitespace-nowrap border-[#915eff] border-t-[1px]">
        <motion.div 
          className="flex min-w-[100%]"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          
        >
          {tech.concat(tech).map((item, index) => (
            <div key={index} className="flex-none md:pl-14 pl-10 py-3">
              <img 
                src={item} 
                alt={`icon-${index}`} 
                className="lg:h-[130px] lg:w-[130px] object-contain md:h-[100px] md:w-[100px] h-[70px] w-[70px]" 
              />
            </div>
          ))}
           {tech.concat(tech).map((item, index) => (
            <div key={index} className="flex-none md:pl-14 pl-10">
              <img 
                src={item} 
                alt={`icon-${index}`} 
                className="lg:h-[130px] lg:w-[130px] object-contain md:h-[100px] md:w-[100px] h-[70px] w-[70px]" 
                
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
