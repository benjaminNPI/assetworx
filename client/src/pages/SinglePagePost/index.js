import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import InnerHTML from 'dangerously-set-html-content'

const SinglePagePost = () => {
  const [data, setData] = useState(null);
  const [dateEl, setDateEl] = useState(null);

  const url = "http://fetchrss.com/rss/64adfcbba39e1139a917d85264adfc891def7c46ec403962.json";
  const { pathname } = useLocation();
  const postID = pathname.split("/");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData)
        const array = Object.values(jsonData.items);
        const data_filter = array.filter((element) => element.guid === postID[3]);
        // console.log(data_filter)

        setData(data_filter);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [postID]);

  useEffect(() => {
    const delayDateEl = setTimeout(() => {
      if (data && data.length > 0) {
        const dateObj = new Date(data[0].pubDate);
        setDateEl(dateObj);
      }
    }, 500);

    return () => {
      clearTimeout(delayDateEl);
    };
  }, [data]);

  if (!data) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="p-12 bg-white">
      <div className=" p-3 text-center">
        <div className="font-bold my-2 text-3xl">{data[0].title}:</div>
        <div className="font-bold my-2">{dateEl ? dateEl.toLocaleString() : ""}</div>
        <InnerHTML html={data[0].description} className="w-full font-bold" />
        
      </div>
    </div>
  );
};

export default SinglePagePost;
