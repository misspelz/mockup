import React from "react";
import Button from "../../components/Button";

const Header = () => {
  return (
    <div className="bg-white rounded-lg p-4 flex justify-end border border-black">
      <div className="flex gap-6">
        <Button className="font-semibold">Contact us</Button>
        <Button className="bg-[#ff9900] px-6 py-[2px] rounded-md font-semibold border border-black">Signup</Button>
      </div>
    </div>
  );
};

export default Header;
