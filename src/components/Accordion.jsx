import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { HiPlusSm } from "react-icons/hi";

const SongAccordion = ({ song, i }) => {
  const [open, setOpen] = useState(null);

  const handleOpen = (value) => {
    setOpen(open === value ? null : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <Fragment>
      <Accordion open={open === i} animate={customAnimation}>
        <AccordionHeader className="ml-2" onClick={() => handleOpen(i)}>
          <div className="bg-white flex justify-between items-center rounded-md py-[10px] px-4 shadow-lg w-full">
            <div className="flex gap-[4px]">
              <h3 className="font-semibold">{song.name}</h3>
              <span className="italic font-semibold">{song.artist}</span>
            </div>

            <HiPlusSm size={25} className="font-bold" />
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
