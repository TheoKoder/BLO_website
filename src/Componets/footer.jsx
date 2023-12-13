import { FaLocationDot } from "react-icons/fa6";
import { images } from "../constants";

const details = [
  "71 Annan Road",
  "Old Mutual Building",
  "Carletonville",
  "2500"
];

const links = {
  linkFB:
    "https://m.facebook.com/groups/1614682615634103/?ref=share&mibextid=KtfwRi",
  linkInsta:
    "https://instagram.com/blackladiesorganisation?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
  linkEm: "enquiries@blackladiesorg.co.za",
};

const LeftFooter = () => {
  return (
    <footer className="h-auto dark:bg-slate-900 dark:text-gray-100 duration-100 bg-gradient-to-bl from-green-200 via-green-300 to-blue-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] object-contain md:h-20 lg:max-h-[1024px]">
      <div className="flex justify-between">
        <span className="ml-3 rounded-lg text-dark-hard dark:text-white text-xl md:text-2xl font-poppins font-bold">
          Follow us:
        </span>
        <div className="Soc-icon flex gap-10 mr-10">
          <a href={links.linkFB} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="50"
              fill="currentColor"
              className="bi bi-facebook dark:text-orange-600 icon"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </a>
          <a href={links.linkInsta} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="50"
              fill="currentColor"
              className="bi bi-instagram dark:text-orange-600 icon"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 a2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486 .145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm 4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm 0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>
          <a href={links.linkEm} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="50"
              fill="currentColor"
              className="bi bi-envelope-at-fill dark:text-orange-600 icon"
              viewBox="0 0 16 16"
            >
              <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
              <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="w-full h-60 mt-2 bg-blue-800 columns-2  col-span-6 gap-4 dark:bg-slate-900 dark:text-gray-100 duration-100 bg-gradient-to-bl from-green-200 via-green-300 to-blue-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] object-contain">
        <div>
          <img src={images.Blo} alt="Blo" className="w-28 md:w-60 rounded-lg" />
        </div>
        <div className="columns-1 col-span-10">
          <ul className="list-none p-0 pl-3 mt-1 ">
            <FaLocationDot
              size={20}
              className="text-white rounded-lg dark:bg-yellow-600 dark:text-gray-100 duration-100 icon"
            />
            {details.map((detail, detailIndex) => (
              <li
                className="lg:text-3xl flex-col text-sm font-alata md:font-oswald mt-2 px-2 font-bold text-black dark:text-gray-900 col-span-11"
                key={detailIndex}
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default LeftFooter;
