import { Link } from "react-router-dom";

export default function Footer() {
  const Links = [
    {
      title: "Company",
      links: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About",
          link: "/about-us",
        },
        {
          name: "Contact",
          link: "/contact",
        },
        {
          name: "Movies",
          link: "/movie",
        },
      ],
    },
    {
      title: "Top Categories",
      links: [
        {
          name: "Action",
          link: "#",
        },
        {
          name: "Romantic",
          link: "#",
        },
        {
          name: "Drama",
          link: "#",
        },
        {
          name: "Historical",
          link: "#",
        },
      ],
    },
    {
        title: "My Account",
        links: [
          {
            name: "Dashboard",
            link: "#",
          },
          {
            name: "My Favorite",
            link: "#",
          },
          {
            name: "Profile",
            link: "#",
          },
          {
            name: "Information",
            link: "#",
          },
        ],
    },
  ];
  return (
    <div className="bg-dry py-4 border-t border-black ">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
          {Links.map((link, index) => (
            <div
              key={index}
              className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0"
            >
              <h3 className="text-md lg:leading-7 mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                {link.title}
              </h3>

              <ul className="text-sm flex flex-colo space-y-3">
                {link.links.map((text, index) => (
                  <li key={index} className="flex items-baseline">
                    <Link
                      to={text.link}
                      className="text-border inline-block w-full hover:text-subMain"
                    >
                        {text.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <Link to="/" className="flex items-center">
                <p className="w-32 object-contain text-subMain">K E N M O V I E</p>
            </Link>
            <p className="leading-7 text-sm text-border mt-3">
                <span>
                Copy Right AryaSegara 2024. All Rights Reserved, <br />Bandung, Indonesia
                </span>
                <br />
                <span>Tell :  +62 123 456 789</span>
                <br/>
                <span>Email : arya@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
