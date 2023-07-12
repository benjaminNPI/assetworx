import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InnerHTML from 'dangerously-set-html-content';

const BlogPosts = () => {
  const [data, setData] = useState(null);
  const url = "http://fetchrss.com/rss/64adfcbba39e1139a917d85264adfc891def7c46ec403962.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getSentences = (text) => {
    const sentenceRegex = /[^.!?]+[.!?]/g;
    return text.match(sentenceRegex);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-lightblue to-darkblue p-3">
        {data ? (
          <div className="flex bg-reviewBlue p-3 border-white border border-4 rounded-lg">
            {data.items.map((item, index) => (
              <div className="mx-2 bg-white w-1/3 relative" key={index}>
                <div>
                  <img src={item['media:content']} alt="Blog Post" className="w-full h-48" />
                </div>
                <div className="px-3 mt-4">
                  <div className="text-sm font-bold">Blog Post</div>
                  <div className="font-bold my-2">{item.title}:</div>
                  <InnerHTML
                    html={getSentences(item.description)?.[0]}
                    className="text-sm inline-block"
                  />
                </div>
                <div className="flex my-8">
                  <Link
                    to={`/resources/blog/${item.guid}`}
                    type="button"
                    className="bg-reviewBlue mb-2 absolute left-10 right-10 bottom-0 hover:bg-lightblue text-white rounded-full pt-1 pb-[6px] text-sm text-black text-center"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
};

export default BlogPosts;
