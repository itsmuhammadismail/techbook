const Resource = ({ isgray, heading, desc, children }) => {
  return (
    <div className={`${isgray && "bg-[#FAFAFA]"}`}>
      <div className="max-w-[70rem] mx-auto flex flex-col justify-center px-12 md:px-44 py-[2.5rem] ">
        <h1 className="heading text-[3.125rem] text-center sm:text-left font-bold mb-[0.5rem]">{heading}</h1>
        <p className="max-w-[56rem] text-[#707070] text-sm text-justify sm:text-left">{desc}</p>
        {/* SOP */}
        {children}
      </div>
    </div>
  );
};

export default Resource;
