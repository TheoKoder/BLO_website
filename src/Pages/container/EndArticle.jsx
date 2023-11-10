import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import MainLayout from "../../Componets/MainLayout";
import { images } from "../../constants";

const EndArticle = () => {
  const imageArray = [
    { src: images.JuneNyaope, alt: "Image 1" },
    { src: images.ProperMainPic, alt: "Image 2" },
    { src: images.ShoeActive, alt: "Image 5" },
    { src: images.Shoedrive2, alt: "Image 6" },
    { src: images.SchoolshoesDrive, alt: "Image 7" },
    { src: images.WinterNyaope, alt: "Image 8" },
    { src: images.Blanketdrive, alt: "Image 9" },
  ];

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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MainLayout>
      <div ref={ref}>
        <motion.div
          id="/EndArticle"
          className="w-full h-screen mb-[-1] pt-7 text-dark-soft font-bold text-left dark:bg-slate-900 dark:text-gray-100 duration-100"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 3, delay: 0.5 }}
        >
          <div className="dark:bg-slate-900 dark:text-gray-100 duration-100 p-6">
            <h1 className="font-poppins text-xl text-center mb-6 md:text-5xl bg-green-300 rounded-lg">
              Services
            </h1>
            <div className="container mt-20 flex justify-center flex-wrap border-lime-50">
              <ul className="list-disc pl-6 italic grid grid-cols-1 mt-7 lg:text-3xl font-semibold font-oswald max-w-[400px] md:text-2xl lg:mr-10">
                <li>Business Development and Compliance Workshops</li>
                <li>Skills Development Workshops</li>
                <li>Financial Literacy Workshops, Training, and mentorships</li>
                <li>Leadership Programmes for youth, women, and disabled</li>
              </ul>
              <ul className="list-disc pl-6 italic mt-7 grid grid-cols-1 md:text-2xl font-semibold font-oswald text-gray-900m lg:text-3xl max-w-[400px]">
                <li>
                  Align Mentors to support, encourage and assist in fostering
                  relationships with mentees and achieve their goals
                </li>
                <li>
                  Active in CSI Programmes that benefit previously disadvantaged
                  communities.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <div className="hidden md:block w-full h-screen text-dark-soft font-bold text-left dark:bg-slate-900 dark:text-gray-100 duration-100">
        <h1 className="font-poppins text-xl text-center mb-6 md:text-5xl bg-green-300 rounded-lg">
            Image Section
          </h1>
          <div className="columns-4  md:col-span-12 gap-6 justify-center w-full h-screen mb-7 pt-7 text-dark-soft font-bold text-left dark:bg-slate-900 dark:text-gray-100 duration-100">
            {imageArray.map((image, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={imageVariants}
                transition={{ duration: 3, delay: .55 }}

              >
                <LazyLoadImage src={image.src} alt={image.alt} effect="blur" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EndArticle;
