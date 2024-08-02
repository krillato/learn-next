import Image from 'next/image';

//image
import facebook from "@/public/assets/footer/facebook.png";
import gmail from "@/public/assets/footer/gmail.svg";
import ig from "@/public/assets/footer/ig.png";
import linkinICN from "@/public/assets/footer/linkin.png";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  return (
    <button
        onClick={handleScrollToTop}
        className="bg-purple-400 h-auto mt-10  hover:bg-[#D397F8]  w-full duration-700  cursor-pointer shadow-2xl rounded-tl-3xl rounded-tr-3xl lg:rounded-tl-full lg:rounded-tr-full  flex flex-col justify-center items-center p-5 relative"
      >
        <span className="text-[18px] font-semibold">BACK TO TOP</span>
        <div className="flex justify-center gap-[50px] mt-[50px]">
          <Image
            src={facebook}
            alt="Profile"
            loading="lazy"
            className=" shadow-lg h-[40px] w-[40px] hover:bg-gray-700 cursor-pointer active:bg-gray-900 "
          />
          <Image
            src={linkinICN}
            alt="Profile"
            loading="lazy"
            className=" shadow-lg h-[40px] w-[40px] hover:bg-gray-700 cursor-pointer active:bg-gray-900 "
          />
          <Image
            src={ig}
            alt="Profile"
            loading="lazy"
            className=" shadow-lg h-[40px] w-[40px] hover:bg-gray-700 cursor-pointer active:bg-gray-900 "
          />
          <Image
            src={gmail}
            alt="Profile"
            loading="lazy"
            className=" shadow-lg h-[40px] w-[40px] hover:bg-gray-700 cursor-pointer active:bg-gray-900 "
          />
        </div>
        <div className="mt-[30px] text-[18px] font-normal">
          @2024 Tammarat Chansamoen Time.
        </div>
      </button>
  )
}

export default Footer