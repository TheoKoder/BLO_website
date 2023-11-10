import PropTypes from "prop-types";
import { BiPhone } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

const ContactsItem = ({ img, Email, phone }) => {
  return (
    <div className="w-11/12 h-auto mx-auto py-auto">
      <div className="rounded-xl grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 bg-gradient-to-bl from-green-200 via-green-300 to-blue-500">
        <div className="w-full h-auto">
          <img
            src={img}
            alt={img.alt}
            className="object-cover lg:object-right-top w-full h-96 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3) rounded-tr-full"
          />
        </div>
        <div className="w-full h-80 flex flex-col justify-center">
          <a
            className="text-white font-bold text-md md:text-2xl font-poppins italic mt-4"
            href={`mailto:${Email}`}
          >
            <HiOutlineMail size={30} /> {Email}
          </a>
          <p className="text-white font-bold text-3xl font-poppins italic mt-4">
            <BiPhone size={30} />
            {phone}
          </p>
        </div>
      </div>
    </div>
  );
};

ContactsItem.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.object,
    alt: PropTypes.string,
  }),
  Email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactsItem;
