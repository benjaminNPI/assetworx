import React from "react";
import { Link } from "react-router-dom";
import Services from "../../components/Services/index";
import Process from "../../components/Process/index";
import Client from "../../components/Clients/index";
import Cert from "../../components/Cert/index";
import Reviews from "../../components/Reviews/index";
import RSSHeader from "../../components/RSS Feed Header";

const Home = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-lightblue to-darkblue ">
        <div className="bluewave pb-20">
          <main className="mt-20 sm:flex mx-14">
            <div className="w-full sm:w-1/2 sm:m-5 items-end">
              <div className="max-w-md">
                <img
                  className="m-auto"
                  src="/img/assetworx-logo.webp"
                  alt="Assetworx Logo"
                />
                <h1 className="font-bold text-white text-5xl text-center m-0">
                  ASSETWORX
                </h1>
                <hr className="text-white border-t-8 rounded"></hr>
                <p className="text-white text-center font-bold mb-5">
                  YOUR ASSETS, YOUR INVESTMENTS, OUR EXPERTISE.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 order-first mt-16 flex sm:justify-end">
              <div className="max-w-md">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-10 my-4">
                  A Lifecycle <br></br>Service that Worx
                </h1>
                <p className="text-white mt-8">
                  Our state of the art processes are faster and more efficient
                  than our competitors. We help you and your company sell your
                  decommissioned IT equipment for the highest price without
                  compromising on quality and security.
                </p>
                <Link
                  type="button"
                  className="bg-white hover:bg-opacity-30 hover:text-white inline-block mx-auto rounded-full px-6 pt-2 pb-[6px] font-medium text-black my-3 text-center mr-1"
                >
                  Our Process
                </Link>
                <Link
                  type="button"
                  className="hover:bg-white bg-white bg-opacity-60 hover:text-black inline-block mx-auto rounded-full px-6 pt-2 pb-[6px] font-medium text-black text-center mx-1 mb-10"
                >
                  Request a Pickup
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div>
        <RSSHeader />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Process />
      </div>
      <div>
        <Client />
      </div>
      <div className=" sm:p-12 md:px-24 lg:px-42 xl:px-96 py-8 bg-gradient-to-r from-lightblue to-darkblue">
        <Reviews />
      </div>
      <div>
        <Cert />
      </div>
    </>
  );
};

export default Home;
