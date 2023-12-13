import React from 'react';
import MainLayout from './MainLayout';

const details = [
  "Account name: BLO Business Account",
  "Bank: FNB",
  "Account no: 63028877265",
  "Ref: 'Your Name'",
];

export const DonateSection = () => {
  return (
    <MainLayout>
      <section
        id="/DonateSection" // Remove the leading slash in the ID
        className="dark:bg-slate-900 dark:text-gray-100 duration-100 w-full h-screen object-cover mx-auto flex flex-wrap md:gap-x-5 gap-y-6 px-10 py-10"
      >
      <span className="font-poppins items-center text-center mb-auto text-lg lg:text-5xl bg-green-300 rounded-lg">From as Little as R10</span>
        <div className="container lg:mt-[-2] h-auto flex justify-center items-center">
          <div className="box-card bg-gradient-to-bl from-green-200 via-green-300 to-blue-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <ul className="list-none pl-4 columns mt-2 col-span-9">
              {details.map((detail, index) => (
                <li className="text-black text-lg pt-12 pb-5 md:text-2xl font-poppins font-bold italic" key={index}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DonateSection;
