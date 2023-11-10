import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
//import React from 'react';

const EventCard = ({ images, title, content }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Remove triggerOnce to allow repeated animations
  });

  const itemRef = useRef(); // Create a ref for the animation element

  useEffect(() => {
    if (inView && itemRef.current) {
      // Only apply the transformation if inView is true and itemRef.current is defined
      itemRef.current.style.transform = "scale(1.2)";
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        transition={{ duration: 3, delay: 0.5 }}
        className="w-full object-cover object-center grid md:grid-cols-1 h-3/4 md:51 lg:flex rounded-lg"
      >
        <img
          src={images}
          alt="banner"
          className="hidden w-1/2 min-h-max object-cover md:51 lg:flex rounded-lg"
        />
        <div className="p-6">
          <span className="font-poppins text-md md:text-2xl font-bold md:text-left dark:bg-orange-400 dark:text-black text-white bg-[#001b5e] lg:text-center lg:max-w-[520px] rounded-lg">
            {title}
          </span>
          {Array.isArray(content) ? (
            <ul className="grid grid-rows-1 list-disc pl-4">
              {content.map((detail, detailIndex) => (
                <li
                  className="text-sm md:text-xl font-oswald mt-3 px-2 font-semibold flex-1"
                  key={detailIndex}
                >
                  {detail}
                </li>
              ))}
            </ul>
          ) : (
            <div className="inline w-full h-96">
              <p className="text-sm md:text-xl font-oswald mt-4 px-2 font-semibold">
                {content}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

EventCard.propTypes = {
  images: PropTypes.shape({
    src: PropTypes.object,
    alt: PropTypes.string,
  }), // Assuming img is a URL string
  title: PropTypes.string,
  content: PropTypes.string,
};

export default EventCard;
