import React from "react";
import { Link } from "react-router-dom";
import BlogPosts from "../blogPosts";
import Casestudies from "../caseStudies";
import ClientSuccess from "../clientSuccess";
import OurImpact from "../ourImpact";
import { useLocation } from "react-router-dom";
import RSSHeader from "../RSS Feed Header/resource";

const ResourceHeader = (req) => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="bg-gradient-to-r from-lightblue to-darkblue">
        <div className="text-center mb-20">
          <div className="pt-10 text-4xl font-bold text-white">ASSETWORX RESOURCES</div>
          <div className="text-white mb-5">
            Never miss a beat! Subscribe to stay up to date on industry news.
          </div>
          <div>
            <form action="process-form.php" method="post">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="px-5 py-2"
                required
              />
              <input className="bg-green px-5 py-2" type="submit" value="Submit Email" />
            </form>
          </div>
        </div>
        <RSSHeader />

        <div className="mx-5 pt-20 pb-2">
          <Link
            className="bg-reviewBlue mx-1 text-white px-4 py-2 border border-2 border-white rounded-lg"
            to="/resources/blog"
          >
            Blog Posts
          </Link>
          <Link
            className="bg-reviewBlue mx-1 text-white px-4 py-2 border border-2 border-white rounded-lg"
            to="/resources/case-studies"
          >
            Case Studies
          </Link>
          <Link
            className="bg-reviewBlue mx-1 text-white px-4 py-2 border border-2 border-white rounded-lg"
            to="/resources/white-papers"
          >
            White Papers
          </Link>
          <Link
            className="bg-reviewBlue mx-1 text-white px-4 py-2 border border-2 border-white rounded-lg"
            to="/resources/our-impact"
          >
            Our Impact
          </Link>
        </div>
      </div>
      {pathname.includes("/resources/blog") && <BlogPosts />}
      {pathname.includes("/resources/case-studies") && <Casestudies />}
      {pathname.includes("/resources/white-papers") && <ClientSuccess />}
      {pathname.includes("/resources/our-impact") && <OurImpact />}
    </>
  );
};
export default ResourceHeader;
