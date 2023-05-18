import React from "react";
import { songs } from "../../JSON/data";
import Button from "../../components/Button";
import Accordion from "../../components/Accordion";

const TrendingSongs = () => {
  return (
    <div className="md:w-[50%] lg:w-[25%] bg-[#666666] my-4  px-2 py-2 rounded overflow-hidden overflow-y-scroll">
      <h1 className="mt-4 text-center font-bold text-2xl">Trending songs</h1>
      <div>
        {songs.map((song, i) => {
          return <Accordion key={i} song={song} i={i} />;
        })}
      </div>
      <div className="flex justify-center mt-2 mb-4 md:mb-0">
        <Button className="bg-[#ff9900] px-4 py-2 rounded-md font-bold">
          View more
        </Button>
      </div>
    </div>
  );
};

export default TrendingSongs;
