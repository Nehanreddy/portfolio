import {
  RiReactjsLine,
  RiJavascriptLine
} from "react-icons/ri";
import { 
  FaNodeJs, 
  FaRaspberryPi, 
  FaCode 
} from "react-icons/fa";
import { 
  DiMongodb, 
  DiMysql 
} from "react-icons/di";
import { 
  SiArduino, 
  SiExpress, 
  SiFirebase 
} from "react-icons/si";
import { motion } from "framer-motion";
import React from "react";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: 10,
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {[
          { Icon: RiReactjsLine, label: "React", color: "text-cyan-400", duration: 2 },
          { Icon: RiJavascriptLine, label: "JavaScript", color: "text-yellow-300", duration: 2.5 },
          { Icon: FaNodeJs, label: "Node.js", color: "text-green-500", duration: 3 },
          { Icon: SiExpress, label: "Express.js", color: "text-white", duration: 3 },
          { Icon: DiMongodb, label: "MongoDB", color: "text-green-400", duration: 3 },
          { Icon: DiMysql, label: "MySQL", color: "text-blue-400", duration: 3 },
          { Icon: FaCode, label: "C++", color: "text-purple-500", duration: 4 },
          { Icon: SiFirebase, label: "Firebase", color: "text-yellow-500", duration: 2 },
          { Icon: FaRaspberryPi, label: "Raspberry Pi", color: "text-rose-600", duration: 2 },
          { Icon: SiArduino, label: "Arduino", color: "text-blue-400", duration: 2 },
        ].map(({ Icon, label, color, duration }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          >
            <Icon className={`text-7xl ${color} mx-auto`} />
            <p className="mt-2 text-sm text-white">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
