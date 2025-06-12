import React from "react";
import { WORK_EXPERIENCE } from "../constants"; // Importing WORK_EXPERIENCE from constants.js
import { motion } from "framer-motion"; // Using framer-motion for animations

const Experience = () => (
  <section className="border-b border-neutral-900 pb-20">
    <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-20 text-center text-4xl"
    >
      Experience
    </motion.h2>

    <div className="flex flex-col gap-10 px-4">
      {WORK_EXPERIENCE.map((exp, idx) => (
        <motion.div
          key={idx}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: idx * 0.2 }}
          className="bg-neutral-900 p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold text-white">
            {exp.role} @ {exp.company}
          </h3>
          <p className="text-neutral-400 italic mb-2">
            {exp.year} • {exp.location}
          </p>
          <p className="text-neutral-200 whitespace-pre-wrap">
            {exp.description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-4">
            {exp.technologies.map((tech, i) => (
              <li
                key={i}
                className="bg-neutral-800 px-2 py-1 rounded text-sm text-purple-400"
              >
                {tech}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
