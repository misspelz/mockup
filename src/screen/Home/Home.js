import React from 'react'
import Header from "./Header";
import TrendingSongs from "./TrendingSongs";
import Button from "../../components/Button";

const Home = () => {
  return (
    <div className="bg-[#eeeeee] md:h-screen p-8">
      <Header />
      <div className="flex flex-col md:flex-row justify-between md:h-[85vh]">
        <div className="md:w-[50%] lg:w-[70%] lg:pl-20 flex flex-col my-8 md:mt-[120px]">
          <h1 className="text-[30px] md:text-[50px] font-bold">
            Make your party fun!
          </h1>
          <p className="text-[14px] md:text-[25px] font-semibold">
            Create your own custom playlist today.
          </p>
          <div className="w-[100%]">
            <Button className="bg-[#ff9900] px-2 py-2 rounded-md w-[30%] md:w-[40%] lg:w-[20%]  mt-6 md:mt-10 font-semibold text-[15px] md:text-[20px]">
              Create playlist
            </Button>
          </div>
        </div>
        <TrendingSongs />
      </div>
    </div>
  )
}

export default Home