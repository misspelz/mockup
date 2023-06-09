import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";

const SongAccordion = ({ song, i }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? !false : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <Fragment>
      <Accordion className="mt-6" open={open === i} animate={customAnimation}>
        <AccordionHeader className="ml-2 flex gap-4" onClick={() => handleOpen(i)}>
          <div className="bg-white flex justify-between items-center rounded-md py-[12px] px-4 shadow-lg w-full">
            <div className="flex gap-[4px]">
              <h3 className="font-semibold">{song.name}</h3>
              <span className="italic font-semibold">{song.artist}</span>
            </div>
            {open === i ? <HiMinusSm size={25} className="font-bold" /> : <HiPlusSm size={25} className="font-bold" />}
          </div>
        </AccordionHeader>
        <AccordionBody className="bg-white w-full rounded-md py-[10px] px-4">
          {song.desc}
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
};

export default SongAccordion;
