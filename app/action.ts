"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { loadingPost, searchPost } from "@/lib/counterSlice";

import { serviceGetHistoryContent } from "@/services/HistoryContent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface IDataHistory {
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
}

export function actionHomePage() {
  const { value, search } = useSelector((state: any) => state.counter);

  const dispatch = useDispatch();

  const [FixDataHistory, setFixDataHistory] = useState<IDataHistory[]>([]);

  const [listDataHistory, setDataHistory] = useState<IDataHistory[]>([]);

  const [loading, setLoading] = useState(true);

  const [useSearch, setSearch] = useState("");

  const handleSearch = (value: string) => {
    setSearch(value);
    dispatch(searchPost(value));
  };
  const handleSetLoadingContent = () => {
    dispatch(loadingPost(value));
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchData();
    }, 1000);
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [value]);

  function searchByTitle(data: IDataHistory[], searchTerm: string) {
    const result = data.filter((item) => item.title.includes(searchTerm));
    return result.map((item) => item.topic_id);
  }

  const fetchData = async () => {
    try {
      if (FixDataHistory.length > 0 && search.length > 0) {
        const filterHavedata = searchByTitle(FixDataHistory, search);

        const response = await serviceGetHistoryContent(
          filterHavedata[0] || ""
        );
        const responseData = filterHavedata?.length > 0 ? response : [];
        if (Array.isArray(responseData)) {
          setDataHistory(responseData);
        } else {
          setDataHistory([responseData]);
        }
      } else {
        const response = await serviceGetHistoryContent();
        setDataHistory(response);
        setFixDataHistory(response);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching detail:", error);
      setLoading(false);
    }
  };

  return {
    listDataHistory,
    loading,
    handleSearch,
    useSearch,
    handleSetLoadingContent,
  };
}
