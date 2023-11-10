import EventCard from "../../Componets/EventCard";
import MainLayout from "../../Componets/MainLayout";
import { images } from "../../constants";

const eventList = [
  {
    title: "School Shoe Drive",
    content:
      "The initiative began earlier this year at Wedela Primary School and recently the ladies visited Hlangani Primary School on Tuesday 23 May where they donated 50 pairs of shoes. After the handing out of shoes they also managed to provide a few extra pairs and that has brought about the realization of the need to get more sponsorships to provide more for the needy children. Merafong Primary School was visited on Wednesday 24 May where they also donated another 50 pairs of shoes. The beneficiaries were happy to receive the donations. The initiative is sponsored by Harmony Gold Mine and the organization is also open for more sponsors so that they can able to make a difference. The planning is to continue with the initiative in areas all around Merafong every year.The target is 1000 shoes per year,to identify critically needy families and assist with essential goods, uniforms, clothes and blankets. The initiative is p/month basis which we dedicate to community development by creating a meaningful impact in the communities and also close the gap with the aim of curbing poverty and unemployment.",
    images: images.Shoesdrvie1, alt: "Alt text 1" 
  },
  {
    title: "Youth Day",
    content:
      "Sponsored By: Members of BLO In Partnership with Carletonville SAPS/SAVF/MASAC Raising Drug and Alcohol Awareness and assisting users to get correct information and help needed. Black Ladies Organization (BLO) hosted a drug awareness campaign in Carletonville Civic Centre Park on Friday,June 16 to commemorate YOUTHN DAY. The organization Invited youth affected by substance abuse to the event. where guest speakers from local stakeholders like MASAC (Merafong Anti Substance Abuse Centre), SAVF and the Carletonville SAPS supported the nitiative with the aim to assist the youth sleeping on the streets and using drugs by alerting them to the implicationos and consequences of substance abuse. They got information about rehabilitation and support from various institutions. Each individual beneficiary recieved special attention in order to assertain their needs and recieve information to their specific needs and ultimately help them reach a drug free state.",
    images: images.NyaopeDriv, alt: "Alt text 1",
  },
  {
    title:"SMME Development ",
    content:"Sponsored BY: SEDA In Partnership with Merafong Local Municipality ,Local Economic Development Department.The beginning of women’s month kicked off with a training conducted by National Financial Literacy Association which was sponsored by Graca Machel Trust. It took place in the Carletonville CBD on 21 Flint Street. The training was financial literacy for local SMME’s and the majority of the participants were women owned businesses. It was a financial inclusion and economic recovery project which starts off with a 2 day training and assessments over a period of 6 months assisting with financial advice and financial management in their businesses. During the course they will receive on-site evaluation and mentorship to ensure the businesses operate efficiently. Approximately 50 entrepreneurs participated who were identified by the Black Ladies Organization database. The NFLA’s purpose is to create an economically inclusive economy through workshops, training and coaching of entrepreneurs. The programme is designed to support SMME”s with industry compliance and financial literacy, access to markets as well as to finance.  ",
    images:images.smde_financial
  },
  {
    title:"Winter Drive ",
    content:"Sponsored BY:BLO Members Commemorating Mandela Day with donating Soup and Bread and Blankets.",
    images:images.WinterSoup
  }
];

const Events = () => {
  return (
    <MainLayout>
    
        <section
        id="/Events"
        className=" mt-14 sm:w-11/12 grid grid-flow-row-dense md:w-full height:150px dark:bg-slate-900 dark:text-gray-100 duration-100 object-cover mx-auto md:gap-x-5 gap-y-6 px-10 py-10 "
      >
        <h1 className="lg:text-7xl text-3xl md:text-xl py-20 mt-1 lg:text-center md:text-left text-blue-700 font-poppins font-bold">
          Events
        </h1>
        {eventList.map((item, index) => (
          <EventCard
            className="w-full md:w-[calc(50%-20px))] lg:w-[calc(65.5%-20px)]"
            key={index}
            images={item.images} // Change 'image' to 'img'
            title={item.title} // Change 'tit' to 'title'
            content={item.content} // Change 'det' to 'details'
          />
        ))}
      </section>
    </MainLayout>
  );
};

export default Events;
