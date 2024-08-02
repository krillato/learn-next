import React from 'react'

function TagView() {
  const dataTag = [
    'BNK48',
    'Jujutsu Kaisen (มหาเวทย์ผนึกมาร)',
    'BLACKPINK (นักร้องนักดนตรี)',
    'BABYMONSTER (นักร้องนักดนตรี)',
    'Time Tammarat',
    'ฟุตบอลไทย',
    'BTS (นักร้องนักดนตรี)',
    'NewJeans (นักร้องนักดนตรี)',
    'แบดมินตัน',
    'เกมบอลพันทิป',
    'ปัญหาชีวิต'
  ]
  return (
    <div className="w-full h-auto flex flex-col mt-10 md:w-[20%] ">
        <div className="bg-[#1f1d33] h-[50px] text-start items-start flex flex-col rounded-t-xl w-auto  p-2 px-3">
          <span className="items-start text-left flex justify-start text-[#FBC02D] border-b-2 border-[#FBC02D]  h-full   font-bold">
            แท็กฮิต
          </span>
        </div>

        <div className="bg-[#353156] p-1 px-5 rounded-tb-xl rounded-b-xl py-3 items-start w-full flex flex-col gap-5 justify-start  h-auto ">
          {dataTag?.map((item) => {
            return (
              <div
                key={item}
                className=" border-b-[1px]  hover:!text-yellow-500 w-full text-white p-2 text-start items-start flex  gap-1 justify-start  cursor-pointer hover:border-b-2 hover:shadow-lg hover:scale-105  transition delay-150 duration-300 ease-in-out"
              >
                <div className="flex ml-2 flex-col justify-start items-start text-left w-full">
                  <span className="font-normal line-clamp-2 text-[17px]  ">
                    {item}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
  )
}

export default TagView

