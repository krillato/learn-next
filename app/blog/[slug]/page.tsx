"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { serviceGetDetail } from "@/services/Content";

async function CreateBlog() {
  const postData = {
    createdAt: "2024-07-13T12:34:08.544Z",
    name: "Time",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/797.jpg",
    content: "unless",
  };

  fetch("https://66938197c6be000fa07bcd99.mockapi.io/content/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
type BlogContent = {
  name: string;
};

function page({ params }: any) {
  const [content, setContent] = useState<BlogContent | null>(null);

  useEffect(() => {
    fetchData();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  const fetchData = async () => {
    if (params?.slug) {
      try {
        const response = await serviceGetDetail(params.slug);
        console.log("Work:", response);
        setContent(response);
      } catch (error) {
        console.error("Error fetching detail:", error);
      }
    }
  };

  return (
    <div className="flex flex-col">
      page : {params?.slug}
      name: {content?.name}
      <button
        onClick={async () => {
          try {
            await CreateBlog();
            console.log("Blog post created successfully!");
          } catch (error) {
            console.error("Error creating blog post:", error);
          }
        }}
      >
        Click Post
      </button>
    </div>
  );
}

export default page;
