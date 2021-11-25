import Fade from "react-reveal/Fade";

const Box = ({ date, text, color, anim }) => {
  let left = false;
  let right = false;
  if (anim == "left") left = true;
  if (anim == "right") right = true;
  return (
    <Fade left={left} right={right}>
      <div
        className={`flex flex-col timeline-box p-[0.5rem] text-[#707070] text-sm min-h-[2rem] my-[0.6rem] rounded-md`}
        style={{ backgroundColor: color }}
      >
        <p>{date}</p>
        <p>{text}</p>
      </div>
    </Fade>
  );
};

export default Box;
