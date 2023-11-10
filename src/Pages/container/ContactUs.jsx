import ContactsItem from "../../Componets/ContactsItem";
import MainLayout from "../../Componets/MainLayout";
import { images } from "../../constants";

const dataC=[
  {
    img:images.NM_contacts,
    Email:"Mthembu@blackladiesorg.co.za",
    phone:'0714394883'
  },
  {
  img:images.BlessContact,
  Email:"Blessingr@blackladiesorg.co.za",
  phone:'0786908775'
  },
  {
    img:images.RaisaContact,
    Email:"MsRed@blackladiesorg.co.za",
    phone:'0760448684'
  }
]
const ContactUs = () => {
  return (
    <MainLayout>
      <section id="/ContactUs" className="w-full h-auto pt-7 dark:bg-slate-900 dark:text-gray-100 duration-100">
        {dataC.map((items,index)=>(
          <ContactsItem key={index} img={items.img} Email={items.Email} phone={items.phone} className=' items-center justify-self-center grid grid-flow-row gap-8' />
        ))}
      </section>
    </MainLayout>
  );
};

export default ContactUs;
