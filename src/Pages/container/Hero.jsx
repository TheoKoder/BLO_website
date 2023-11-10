import { images } from "../../constants/index";

const Hero = () => {
  return (
    <section className="mih-h-screen object-cover mx-auto dark:bg-slate-900 dark:text-white duration-100 flex flex-col-reverse md:flex-col-reverse lg:flex-row px-3 py-5">
      <div className="lg:w-1/2">
        <h1 className="text-7xl font-oswald font-bold   dark:bg-slate-900 dark:text-gray-100 duration-100 text-left text-dark-soft md:text-md lg:text-center lg:max-w-[520px]">
          Background
        </h1>
        <p className="mt-7 lg:text-normal mb-2 font-alata dark:bg-slate-900 dark:text-gray-100 duration-100 text-gray-900 max-w-[999px] md:text-xl md:font-alata lg:mr-10 py-2 px-6">
          Black Ladies Organisation (BLO) was established by three women
          entrepreneurs, who operate their sustainable and successful businesses
          within Merafong district. These remarkable women saw the need to
          assist unemployed and start-up companies owned by women with a laser
          focus in facilitating networking seminars, business skills projects,
          equipment sourcing, and relevant acumen required to propel their
          businesses, thus alleviating the scourge of unemployment and poverty
          in the Merafong City. A registered non-profit organization that is
          based in a dilapidating mining area of Carletonville, West of
          Johannesburg.
        </p>
        <p></p> {/* Add a blank paragraph for spacing */}
        <p className="mt-7 lg:text-normal mb-2 font-alata dark:bg-slate-900 dark:text-gray-100 duration-100 text-gray-900 max-w-[999px] md:text-xl md:font-alata lg:mr-10 py-2 px-6">
          The shortened life span of mines has created a necessity to resort to
          new opportunities for survival. BLO has further created relations with
          the Municipality particularly the Local Economic Development; Social
          Development and Youth Office Division in pursuit of adding a value
          proposition and enhancing the business ecosystem.
        </p>
        <p></p> {/* Add a blank paragraph for spacing */}
        <p className="mt-7 lg:text-normal mb-2 font-alata dark:bg-slate-900 dark:text-gray-100 duration-100 text-gray-900 max-w-[999px] md:text-xl md:font-alata lg:mr-10 py-2 px-6">
          They further provide economic welfare in partnership with various
          stakeholders to the historically disadvantaged, especially the youth
          and disabled by providing a platform to gain entrepreneurship skills
          that will enable them to be economically efficient in their respective
          communities. BLO further accelerates actions to solicit invest
          opportunities, implement, and track progress of the sustainable
          business development in various sectors to achieve gender equality and
          empower women and youth in collaboration with strategic partners.
        </p>
      </div>
      <div className="lg:w-1/2 px-45 lg:mt-40 sm:mt-4 px-10">
        <img
          src={images.ProperMainPic}
          alt="Sidebar"
          className="w-3/4 h-3/4 aspect-[1/1] block overflow-clip rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
        />
      </div>
    </section>
  );
};

export default Hero;
