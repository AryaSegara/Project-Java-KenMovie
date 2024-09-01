/* eslint-disable react/prop-types */
import { FaFacebook, FaPinterest, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import MainModals from "./MainModals";
import { FacebookShareButton } from "react-share";
import { TwitterShareButton } from "react-share";
import { TelegramShareButton } from "react-share";
import { WhatsappShareButton } from "react-share";
import { PinterestShareButton } from "react-share";
import { MdEmail } from "react-icons/md";
import { EmailShareButton } from "react-share";
// import { Movie } from "../../data/MovieData";

export default function ShareModals({ modalOpen, setModalOpen, movie }) {
  const shareData = [
    {
      icon: FaFacebook,
      shareButton: FacebookShareButton,
    },
    {
      icon: FaTwitter,
      shareButton: TwitterShareButton,
    },
    {
      icon: FaTelegram,
      shareButton: TelegramShareButton,
    },
    {
        icon: FaWhatsapp,
        shareButton: WhatsappShareButton,
    },
    {
        icon : FaPinterest,
        shareButton: PinterestShareButton,
    },
    {
        icon: MdEmail,
        shareButton : EmailShareButton
    }

  ];

  const url = `${window.location.protocol}//${window.location.host}/movie/${movie.name}`;

  return (
    <MainModals modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto bg-main text-white">
        <h2 className="text-2xl ">
          Share <span className="text-xl font-bold">{`"${movie?.name}"`}</span>
        </h2>
        <form action="" className="flex-rows flex-wrap gap-6 mt-6">
          {shareData.map((data, index) => (
            <data.shareButton key={index} url={url} quote="Free Movie">
              <div className="w-12 transitions hover:bg-subMain flex-colo text-lg h-12 bg-white rounded bg-opacity-30">
                <data.icon />
              </div>
            </data.shareButton>
          ))}
        </form>
      </div>
    </MainModals>
  );
}
