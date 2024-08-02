"use client";
import Image from "next/image";
import { useState } from "react";
//mui
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
//components
import ClassView from "@/components/Home/ClassView";
import HighlightView from "@/components/Home/HighlightView";
import PickView from "@/components/Home/PickView";
import TagView from "@/components/Home/TagView";
import Footer from "@/components/Home/Footer";

import axios from "axios";
import Link from "next/link";
import Post from "@/components/Post/Post";
import { useFormState } from "react-dom";
import { actionHomePage } from "./action";
import { ClipLoader } from "react-spinners";
async function getBlogs() {
  const response = await fetch(
    `https://66938197c6be000fa07bcd99.mockapi.io/content`
  );

  if (!response.ok) {
    throw new Error("cannot fetch content");
  }

  return response.json();
}

const fetchBlogs = async () => {
  try {
    const response = await axios.get(
      `${process.env.STARPI_BASE_URL}/api/blogs`
    );

    return response.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export default function Home() {
  /*   const content = await getBlogs();
  const blogs = await fetchBlogs(); */
  const initState: {
    created_time: string;
    title: string;
    topic_type: string;
    thumbnail_url: string;
    views_count: number;
    comments_count: number;
    votes_count: number;
    author: string;
    tags: string;
    topic_id: string;
  } = {
    created_time: "",
    title: "",
    topic_type: "",
    thumbnail_url: "",
    views_count: 0,
    comments_count: 0,
    votes_count: 0,
    author: "",
    tags: "",
    topic_id: "",
  };
  /*  const [state, fromAction] = useFormState(actionHomePage, initState);
  console.log("state:", state); */

  const {
    listDataHistory,
    loading,
    handleSearch,
    useSearch,
    handleSetLoadingContent,
  } = actionHomePage();

  return (
    <div className="items-center flex flex-col justify-center">
      <div className="px-5 md:hidden flex justify-center w-full items-center h-[66px] border rounded-full shadow-lg  relative max-w-[800px]">
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
      <div className="border-b-[1px]  w-full mt-10" />
      <Image
        src="/home.png"
        alt="Clerk – Authentication & User Management for Next.js"
        width={1200}
        height={90}
        className="object-cover w-full h-[300px]"
        priority
      />
      <ClassView />
      <HighlightView />

      <div className="flex flex-col md:flex-row gap-2 px-10 w-full justify-center items-center">
        {/*  Pantip Pick */}

        {loading ? (
          <div className="mt-10">
            <ClipLoader size={50} color="#123abc" />
          </div>
        ) : (
          <PickView data={listDataHistory} />
        )}

        {/* แท็กฮิต */}
        {/*  <TagView /> */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

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
