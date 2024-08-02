import Image from 'next/image';
import React from 'react'

function HighlightView() {
  const dataHighLight = [
    {
      name: "[Pantip Point] น้องเพี้ยนชวนแชร์ภาพไอเทมรับหน้าฝน ที่ต้องพกติดกระเป๋า! 🌧️💧☂️",
      message: "",
      weight: 1,
      image_url: [
        "https://ptcdn.info/home_highlight/2024-07/6682472acaac0a6b8b2ba674_o9ehi1pvjb_200.png",
        "https://ptcdn.info/home_highlight/2024-07/6682472acaac0a6b8b2ba674_o9ehi1pvjb_400.png",
        "https://ptcdn.info/home_highlight/2024-07/6682472acaac0a6b8b2ba674_o9ehi1pvjb_1000.png",
      ],
      post_url: "https://pantip.com/s/Ilvm1",
    },
    {
      name: "ต้อนรับฟุตบอลยูโร 2024 ด้วย “เกมบอล”",
      message: "",
      weight: 3,
      image_url: [
        "https://ptcdn.info/home_highlight/2024-06/66470fa1caac0a97173804f6_mxsex4lszz_200.png",
        "https://ptcdn.info/home_highlight/2024-06/66470fa1caac0a97173804f6_mxsex4lszz_400.png",
        "https://ptcdn.info/home_highlight/2024-06/66470fa1caac0a97173804f6_mxsex4lszz_1000.png",
      ],
      post_url: "https://pantip.com/s/ui136",
    },
    {
      name: "🎧 PANTIP PODCAST 🎧 3 อันดับกระทู้ฮิตบนพันทิปประจำวัน 📊",
      message: "",
      weight: 3,
      image_url: [
        "https://ptcdn.info/home_highlight/2022-10/633b8e4a00d01f12500f33e6_hvzb60o1p0_200.jpg",
        "https://ptcdn.info/home_highlight/2022-10/633b8e4a00d01f12500f33e6_hvzb60o1p0_400.jpg",
        "https://ptcdn.info/home_highlight/2022-10/633b8e4a00d01f12500f33e6_hvzb60o1p0_1000.jpg",
      ],
      post_url: "https://pantip.com/s/rKCro",
    },
    {
      name: "ชวนโชว์พื้นที่นั่งเล่นในบ้าน ลุ้นรับ pantip point 50 คะแนน 🌿🪑",
      message: "",
      weight: 5,
      image_url: [
        "https://ptcdn.info/home_highlight/2024-07/668646c5caac0af78631fad8_1osl902uzv_200.png",
        "https://ptcdn.info/home_highlight/2024-07/668646c5caac0af78631fad8_1osl902uzv_400.png",
        "https://ptcdn.info/home_highlight/2024-07/668646c5caac0af78631fad8_1osl902uzv_1000.png",
      ],
      post_url: "https://pantip.com/s/3QBxO",
    },
    {
      name: "🚩 กิจกรรมแชร์ “แอปแต่งรูป มีติดเครื่องไว้ รับรองสวยปังก่อนโพสต์” ตอบถูกใจ รับ Pantip point 50 คะแนน 🚩",
      message: "",
      weight: 20,
      image_url: [
        "https://ptcdn.info/home_highlight/2024-07/668cdc21caac0a34ce1e5286_xfcweutugk_200.jpg",
        "https://ptcdn.info/home_highlight/2024-07/668cdc21caac0a34ce1e5286_xfcweutugk_400.jpg",
        "https://ptcdn.info/home_highlight/2024-07/668cdc21caac0a34ce1e5286_xfcweutugk_1000.jpg",
      ],
      post_url: "https://pantip.com/s/tCU1m",
    },
    {
      name: "พันทิปนานุกรม … ชวนมาดู Cover Design วันสำคัญ บนเว็บไซต์ Pantip",
      message: "",
      weight: 20,
      image_url: [
        "https://ptcdn.info/home_highlight/2023-09/64f586c3caac0a43be1e9c04_ohwbqfbnf2_200.jpg",
        "https://ptcdn.info/home_highlight/2023-09/64f586c3caac0a43be1e9c04_ohwbqfbnf2_400.jpg",
        "https://ptcdn.info/home_highlight/2023-09/64f586c3caac0a43be1e9c04_ohwbqfbnf2_1000.jpg",
      ],
      post_url: "https://pantip.com/s/NBe8P",
    },
  ];
  
  return (
    <div className="w-full h-auto flex flex-col mt-10 md:px-10 gap-2">
    <div className="bg-purple-800 rounded-xl w-auto">
      <span className="items-start text-left flex justify-start text-white p-1 pl-2 font-bold">
        Highlight
      </span>
    </div>

    <div className="grid grid-cols-3  items-center w-full md:flex flex-row gap-2 md:justify-center  h-auto ">
      {dataHighLight?.map((item) => {
        return (
          <div
            key={item?.name}
            className="border bg-purple-700 col-span-1 md:w-[900px]  p-2 text-center items-center flex flex-col gap-1 justify-center rounded-xl cursor-pointer hover:border-b-2 hover:shadow-lg hover:scale-110  transition delay-150 duration-300 ease-in-out"
          >
            <Image
              src={`${item?.image_url[0]}`}
              alt="Clerk – Authentication & User Management for Next.js"
              width={500}
              height={500}
              className="object-cover md:w-[900px]"
            />

            <span className="text-white font-normal line-clamp-2 text-[14px] bg-purple-600">
              {item?.name}
            </span>
          </div>
        );
      })}
    </div>
  </div>
  )
}


export default HighlightView