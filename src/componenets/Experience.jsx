import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import Timeline from "./Timeline";

const Experience = () => {
  return (
    <div
      id="experience"
      className="border-b border-neutral-900 
                 px-4 sm:px-6 lg:px-12 
                 py-12 sm:py-16 lg:py-20"
    >
      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.5 }}
        className="text-center 
                   text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                   font-bold mb-12 sm:mb-16 lg:mb-20"
      >
        Experience
      </motion.h1>

      {/* Timeline (Desktop & Tablet) */}
      <div className="hidden md:block">
        <Timeline experiences={EXPERIENCES} />
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-6">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="bg-neutral-900 dark:bg-dark-accent 
                       rounded-xl 
                       p-4 sm:p-5 
                       shadow-md hover:shadow-lg 
                       transition duration-300"
          >
            {/* Year */}
            <p className="text-purple-400 font-semibold text-sm sm:text-base mb-2">
              {experience.year}
            </p>

            {/* Role + Company */}
            <h6 className="text-lg sm:text-xl font-semibold mb-2 leading-snug">
              {experience.role}
              <span className="block sm:inline text-sm text-purple-300 sm:ml-2">
                {experience.company}
              </span>
            </h6>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-400 dark:text-gray-300 mb-4 leading-relaxed">
              {experience.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((technology, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-neutral-800 dark:bg-dark-primary 
                             px-2 py-1 
                             text-xs sm:text-sm 
                             rounded-md 
                             text-purple-400 font-medium"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;