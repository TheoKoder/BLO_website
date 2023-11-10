import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import ArticleCard from "../../Componets/ArticleCard";
import MainLayout from "../../Componets/MainLayout";
import { images } from "../../constants/index";

const data1 = [
  {
    img1: images.ActService,
    title1: "Vision",
    content1: [
      "Alleviate unemployment",
      "Solve societal inequalities and decreasing poverty",
      "Especially among women, youth, and disabled through entrepreneurship.",
    ],
  },
];
const data2 = [
  {
    img2: images.VisionAC,
    title2: "Our Mission",
    content2: [
      "To create tangible opportunities",
      "Co-create technical resources",
      "Promote entrepreneurship skills training",
      "Enhance business participation in Merafong Communities",
      "Create sufficient value for its constituency in various partnerships that can add value to the common cause",
      "Address successfully the problems that confront our constituency and dilute challenges to business entry into any sector by aligning a thorough value creation",
      "Migrate resources and capacity to streamline efforts in proposition-led growth by conducting programs",
      "Trainings, workshops, and mentorship in Merafong City for the benefit of BLO's Merafong constituency and community",
    ],
  },
];

const Article = () => {
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

  return (
    <MainLayout>
      <section
        id="/Articles"
        className=" dark:bg-slate-900 dark:text-gray-100 duration-100 object-cover mx-auto md:flex md:flex-col-reverse grid grid-cols-1 md:gap-x-5 gap-y-6 px-10 py-10 "
      >
        {data1.map((item, index) => (
          <ArticleCard
            key={index + "img1"} // Added unique key
            img={item.img1} // Pass the image object
            title={item.title1}
            content={item.content1}
            className="w-full md:w-[calc(50%-20px)] lg:w-[calc(35.5%-20px)]"
          />
        ))}

        {data2.map((item, index) => (
          <ArticleCard
            key={index + "img2"} // Added unique key
            img={item.img2} // Pass the image object
            title={item.title2}
            content={item.content2}
            className="w-full md:w-[calc(50%-20px))] lg:w-[calc(65.5%-20px)]"
          />
        ))}
      </section>
      <div ref={ref}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ from: -180, duration: 2 }}
          className="pb-20 mx-auto items-center justify-center flex flex-col w-full h-auto text-dark-soft font-bold text-left dark:bg-slate-900 dark:text-gray-100 duration-100"
        >
          <h1 className="font-poppins text-xl text-center mb-6 md:text-5xl bg-green-300 rounded-lg">
            Oranganization Structure
          </h1>
          <img
            src={images.oGram}
            alt="OrganoGram"
            className="w-10/12 h-auto shadow-md rounded-lg"
          />
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Article;
