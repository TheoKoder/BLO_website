import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const ArticleCard = ({ className, img, title, content }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Remove triggerOnce to allow repeated animations
  });

  const itemRef = useRef(); // Create a ref for the animation element

  useEffect(() => {
    if (inView && itemRef.current) {
      // Only apply the transformation if inView is true and itemRef.current is defined
      itemRef.current.style.transform = "scale(1.4)";
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    },
  };
  return (
    <div ref={ref}>
    <div className="flex flex-col">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={imageVariants}
        transition={{ duration: 3, delay: 0.55 }}
        className={`rounded-xl overflow-hidden ${className} flex-col-reverse `}
      >
        <img
          src={img}
          alt="banner"
          className="w-full object-cover object-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] h-auto md:51 lg:flex rounded-lg"
        />{" "}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        transition={{ duration: 3, delay: 0.5 }}
        className="p-5"
      >
        <h2 className="font-poppins text-xl md:text-2xl  text-dark-soft font-bold md:text-left  dark:bg-slate-900 dark:text-gray-100 duration-100 lg:text-center lg:max-w-[520px]">
          {title}
        </h2>
        <ul className="grid grid-cols-2 list-disc pl-4">
          {Array.isArray(content) ? (
            content.map((content, contentIndex) => (
              <li
                className="text-sm md:text-xl font-oswald mt-3 px-2 font-semibold flex-1"
                key={contentIndex}
              >
                {content}
              </li>
            ))
          ) : (
            <p className="text-sm md:text-xl font-oswald mt-8 px-2 font-semibold flex-1">
              {content}
            </p>
          )}
        </ul>
      </motion.div>
      </motion.div>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  className: PropTypes.string.isRequired,
  img: PropTypes.shape({
    src: PropTypes.object,
    alt: PropTypes.string,
  }),
  title: PropTypes.string,
  content: PropTypes.array,
};

export default ArticleCard;
