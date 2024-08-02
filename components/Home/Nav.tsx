"use client";
import { useState } from "react";
//mui
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { loadingPost, searchPost } from "@/lib/counterSlice";

function Nav() {
  const loadingPostStatus = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [useSearch, setSearch] = useState("");
  const [openPost, setOpenPost] = useState(false);
  const handleOpen = () => setOpenPost(true);
  const handleClosePost = () => setOpenPost(false);
  const handleSearch = (value: string) => {
    setSearch(value);
    dispatch(searchPost(value));
  };
  const handleSetLoadingContent = () => {
    dispatch(loadingPost(loadingPostStatus));
  };
  return (
    <div>
      <Post openPost={openPost} handleClose={handleClosePost} />
      <div className="flex w-full h-[100px]  p-4 justify-between">
        {/* <Image
    src="/pantip.png"
    alt="Clerk – Authentication & User Management for Next.js"
    width={46}
    height={64}
    className="hover:shadow-lg hover:scale-110 w-[66px] h-[66px] transition delay-150 duration-300 ease-in-out cursor-pointer"
  /> */}
        <div className="p-3 border rounded-full w-[66px] h-[66px] text-xl text-center flex justify-center items-center">
          T
        </div>
        <div className="px-5  hidden md:flex justify-center w-full items-center h-[66px] border rounded-full shadow-lg  relative max-w-[800px]">
          <input
            value={useSearch || ""}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            type="text"
            className=" w-full border-none h-[50px] p-5  focus:outline-none focus:border-transparent"
            placeholder="ค้นหา..."
          />
          <button
            onClick={() => {
              handleSetLoadingContent();
            }}
            className="w-[48px]  h-[48px] rounded-full p-2 text-center  bg-purple-700 hover:bg-purple-800 animate-bounce text-white"
          >
            {IconSearch}
          </button>
        </div>
        <div className="flex gap-3 h-full justify-center items-center">
          <button
            onClick={handleOpen}
            className="flex gap-1 text-center justify-center  items-center hover:shadow-lg hover:scale-110 hover:p-2 hover:bg-purple-300 hover:rounded-xl transition delay-150 duration-300 ease-in-out"
          >
            เพิ่มความทรงจำ{IconMessage}
          </button>
          <button className="hover:shadow-lg hover:scale-110  transition delay-150 duration-300 ease-in-out">
            {IconEarth}
          </button>
          <button
            onClick={handleClick}
            className="w-[86px] h-[48px] p-2 rounded-full border flex gap-2 justify-center items-center transition delay-150 duration-300 ease-in-out hover:shadow-lg hover:scale-110"
          >
            {IconMenu} {IconProfile}
          </button>
        </div>
        <Popover
          id={"popover"}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>
            <div className="flex flex-col gap-2 w-[250px]">
              <span className="text-[16px] font-medium cursor-pointer hover:text-[16px] hover:text-purple-800">
                หน้าแรก
              </span>
              <hr />
              <span className="text-[16px] font-medium cursor-pointer hover:text-[16px] hover:text-purple-800">
                My Feed
              </span>
              <span className="text-[16px] font-medium cursor-pointer hover:text-[16px] hover:text-purple-800">
                Pantip Pick
              </span>
              <span className="text-[16px] font-medium cursor-pointer hover:text-[16px] hover:text-purple-800">
                Pantip Hitz
              </span>
              <span className="text-[16px] font-medium cursor-pointer hover:text-[16px] hover:text-purple-800">
                Explore
              </span>
              <hr />
              <span className="text-[16px] font-medium cursor-pointer hover:text-[16px] hover:text-purple-800">
                แลกพอยต์
              </span>
              <span className="text-[16px] font-medium cursor-pointer hover:text-[16px] hover:text-purple-800">
                กิจกรรม
              </span>
            </div>
          </Typography>
        </Popover>
      </div>
    </div>
  );
}
const IconEarth = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="28"
    height="28"
    color="#000000"
    fill="none"
  >
    <path
      d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M20 5.69899C19.0653 5.76636 17.8681 6.12824 17.0379 7.20277C15.5385 9.14361 14.039 9.30556 13.0394 8.65861C11.5399 7.6882 12.8 6.11636 11.0401 5.26215C9.89313 4.70542 9.73321 3.19045 10.3716 2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M2 11C2.7625 11.6621 3.83046 12.2682 5.08874 12.2682C7.68843 12.2682 8.20837 12.7649 8.20837 14.7518C8.20837 16.7387 8.20837 16.7387 8.72831 18.2288C9.06651 19.1981 9.18472 20.1674 8.5106 21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M22 13.4523C21.1129 12.9411 20 12.7308 18.8734 13.5405C16.7177 15.0898 15.2314 13.806 14.5619 15.0889C13.5765 16.9775 17.0957 17.5711 14 22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);
const IconSearch = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="28"
    height="28"
    color="#ffffff"
    fill="none"
  >
    <path
      d="M14 14L16.5 16.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M16.4333 18.5252C15.8556 17.9475 15.8556 17.0109 16.4333 16.4333C17.0109 15.8556 17.9475 15.8556 18.5252 16.4333L21.5667 19.4748C22.1444 20.0525 22.1444 20.9891 21.5667 21.5667C20.9891 22.1444 20.0525 22.1444 19.4748 21.5667L16.4333 18.5252Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMessage = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="28"
    height="28"
    color="#000000"
    fill="none"
  >
    <path
      d="M12.5 2.01175C12.3344 2.00395 12.1677 2 12 2C6.47778 2 2 6.28357 2 11.5667C2 14.1051 3.03333 16.4115 4.71889 18.1231C5.09 18.5 5.33778 19.0148 5.23778 19.5448C5.07275 20.4112 4.69874 21.2194 4.15111 21.893C5.59195 22.161 7.09014 21.9197 8.37499 21.2364C8.82918 20.9949 9.05627 20.8741 9.21653 20.8496C9.37678 20.8251 9.60633 20.8682 10.0654 20.9545C10.7032 21.0742 11.3507 21.1343 12 21.1334C17.5222 21.1334 22 16.8499 22 11.5667C22 11.3765 21.9942 11.1875 21.9827 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 5.5H22M18.5 2L18.5 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMenu = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    color="#5c5c5c"
    fill="none"
  >
    <path
      d="M4 5L20 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 12L20 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 19L20 19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconProfile = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="28"
    height="28"
    color="#5c5c5c"
    fill="none"
  >
    <path
      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M14.75 9.5C14.75 11.0188 13.5188 12.25 12 12.25C10.4812 12.25 9.25 11.0188 9.25 9.5C9.25 7.98122 10.4812 6.75 12 6.75C13.5188 6.75 14.75 7.98122 14.75 9.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M5.49994 19.0001L6.06034 18.0194C6.95055 16.4616 8.60727 15.5001 10.4016 15.5001H13.5983C15.3926 15.5001 17.0493 16.4616 17.9395 18.0194L18.4999 19.0001"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Nav;
