import Head from "../components/Head";
import Layout from "../layout/Layout";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

export default function Contact() {
  const ContactData = [
    {
      id: 1,
      title: "Email",
      info: "Interactively grow backend ideas fosr cross - platfrom models ",
      icon: FiMail,
      contact: "kenmovie@gmail.com ",
    },
    {
      id: 2,
      title: "Call",
      info: "Distincitely iterate extensible testing procedures for reliable supply chains.",
      icon: FiPhoneCall,
      contact: "+623 123 456 789 ",
    },
    {
      id: 3,
      title: "Location ",
      info: "Bandung Jawa Barat Indonesia - Street No.18 ",
      icon: FiMapPin,
      contact: "",
    },
  ];
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="Contact" />
        <div className="grid mg:grid-cols-2 gap-6 lg:mt-20 mt-10 lg:grid-cols-3 xl:gap-8">
          {ContactData.map((data) => (
            <div
              key={data.id}
              className="bg-dry border border-border flex-colo p-10 rounded-lg text-center"
            >
              <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl">
                <data.icon />
              </span>

              <h5 className="text-xl font-semibold mb-2">{data.title}</h5>
              <p className="mb-0 text-sm text-text font-semibold leading-7">
                <a href="" className="text-blue-600">
                  {data.contact}
                </a>
                {data.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
