import React from "react";
import { songs } from "../JSON/SongsJSON";
import Button from "./Button";
import { HiPlusSm } from "react-icons/hi";

const TrendingSongs = () => {
  return (
    <div className="md:w-[50%] lg:w-[30%] bg-[#666666] my-8 p-6 rounded">
      <h1 className="text-center font-bold text-2xl">Trending songs</h1>
      <div>
        {songs.map((song, i) => {
          return (
            <div
              key={i}
              className="bg-white flex justify-between mt-6 rounded-md py-[10px] px-4 shadow-lg"
            >
              <div className="flex gap-2">
                <h3 className="font-semibold text-[17px]">{song.song}</h3>
                <span className="italic font-semibold">{song.artist}</span>
              </div>

              <HiPlusSm size={25} className="font-bold" />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-6">
        <Button className="bg-[#ff9900] px-4 py-2 rounded-md font-bold">
          View more
        </Button>
      </div>
    </div>
  );
};

export default TrendingSongs;
