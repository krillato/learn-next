"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { loadingPost } from "@/lib/counterSlice";

import { servicePostHistoryContent } from "@/services/HistoryContent";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function actionPost() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "" });
  const loadingPostStatus = useSelector((state: any) => state.counter.value);
  const createPost = async () => {
    try {
      const reqObj = {
        created_time: "2024-08-01T04:22:58.299Z",
        title: form?.name,
        topic_type: "topic_type 1",
        thumbnail_url: "https://loremflickr.com/640/480/cat",
        author: "Tee Time",
        tags: "history",
      };
      const response = await servicePostHistoryContent(reqObj);
      dispatch(loadingPost(loadingPostStatus));
      console.log("Work:", response);
    } catch (error) {
      console.error("Error fetching detail:", error);
    }
  };

  const validate = () => {
    if (form.name) {
      return true;
    } else {
      return false;
    }
  };
  return { form, setForm, validate, createPost };
}

export default actionPost;
