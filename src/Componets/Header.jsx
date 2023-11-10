import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { images } from "../constants";

const opts = [
  {
    icon: "sunny",
    text: "light",
  },

  {
    icon: "moon",
    text: "dark",
  },

  {
    icon: "desktop",
    text: "system",
  },
];

const NavInfoItem = [
  { name: "Home", type: "Link", url: "/" },
  { name: "About", type: "Link", url: "/Articles" }, // Update the URL for Contact Us
  { name: "Events", type: "Link", url: "/Events" }, // Add the Events link with the desired URL
  { name: "Contact", type: "Link", url: "/ContactUs" },
  { name: "Services", type: "Link", url: "/EndArticle" },
];

const NavInfo = ({ item }) => {
  return (
    <li className="relative group">
      {item.type === "Link" ? (
        <>
          <a href={item.url} className="px-3 py-2">
            {item.name}
          </a>
          <span className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <>
          <a href={item.url} className="px-3 py-2">
            {item.name}
          </a>
          <div className="hidden pt-4 transition-all duration-300 absolute bottom-0 right-0 transform translate-y-full group-hover:block w-max"></div>
        </>
      )}
    </li>
  );
};

// Define logic for DonateButton component
const CustomButton = ({ to, children }) => {
  return (
    <Link to={to}>
      <button className="mt-5 lg:mt-0 border-2 bg-green-400 px-6 py-2 rounded-full text-white font-semibold hover:bg-green-400 hover:text-blue-500 transition-all">
        {children}
      </button>
    </Link>
  );
};

// Define PropTypes for DonateButton component
CustomButton.propTypes={
  to: PropTypes.string,
  children:PropTypes.node.isRequired
}

// Define PropTypes for NavInfo component
NavInfo.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired, // Add URL to PropTypes
  }).isRequired,
};

export default function Header() {
 
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const ele = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  let onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      ele.classList.add("dark");
    } else {
      ele.classList.remove("dark");
    }
  };
  onWindowMatch();
  useEffect(() => {
    switch (theme) {
      case "dark":
        ele.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        ele.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        ele.classList.add("dark");
      } else {
        ele.classList.remove("dark");
      }
    }
  });

  const [NavIsVisible, setVisibility] = useState(false);

  const navVisibleHandler = () => {
    setVisibility((currstate) => {
      return !currstate;
    });
  };

  return (
    <section className=" dark:bg-slate-900 dark:text-gray-100 duration-100">
      <header className="container mx-auto px-5 flex justify-between py-5">
        <div>
          <img src={images.Blo} alt="Blo" className="w-1/3 rounded-lg" />
        </div>
        <div className="lg:hidden z-50">
          {NavIsVisible ? (
            <AiOutlineClose className="w-6 h-6" onClick={navVisibleHandler} />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibleHandler} />
          )}
        </div>
        <div
          className={`${
            NavIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0  bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-2 items-center`}
        >
          <ul className="container dark:bg-slate-900  dark:text-gray-100 duration-100 text-white lg:text-dark-soft items-center gap-y-3 flex flex-col lg:flex-row gap-x-3 font-semibold">
            {NavInfoItem.map((item) => (
              <NavInfo key={item.name} item={item} />
            ))}
          </ul>
          <CustomButton to='/DonateSection' >Donate</CustomButton>
        </div>
        <div className="fixed bottom-16 right-10 w-1=0 h-5 md:w-12 md:h-6 rounded-2xl bg-white flex items-center transition duration-300 focus:outline-none shadow">
          {opts?.map((opt) => (
            <button
              onClick={() => setTheme(opt.text)}
              key={opt.text}
              className={`w-6 h-6 md:w-7 md:h-7 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 ${
                theme === opt.text && "text-white"
              } `}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))}
        </div>
      </header>
    </section>
  );
}
